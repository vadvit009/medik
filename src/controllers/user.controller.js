const {User} = require("../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const {restorePassword} = require("../mailer");
const {ObjectId} = require("mongoose").Types;
const {google} = require('googleapis');
const fs = require('fs');
const readline = require('readline');

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/gmail.send'];
const TOKEN_PATH = 'token.json';
fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    authorize(JSON.parse(content), listLabels);
});

function authorize(credentials, callback) {
    console.log(credentials.web)
    const {client_secret, client_id, redirect_uris} = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

function listLabels(auth) {
    const gmail = google.gmail({version: 'v1', auth});
    gmail.users.labels.list({
        userId: 'me',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const labels = res.data.labels;
        if (labels.length) {
            console.log('Labels:');
            labels.forEach((label) => {
                console.log(`- ${label.name}`);
            });
        } else {
            console.log('No labels found.');
        }
    });
}

function makeBody(to, from, subject, message) {
    var str = ["Content-Type: text/html; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", to, "\n",
        "from: ", from, "\n",
        "subject: ", subject, "\n\n",
        message
    ].join('');

    var encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
    return encodedMail;
}

module.exports = {
    getAllUsers: async (req, res) => {
        return await User.find({})
            .then((users) => res.json(users))
            .catch((err) => console.log(err));
    },

    getUser: async (req, res) => {
        const {id} = req.body;
        return await User.findById(id)
            .then((user) => {
                console.log(user)
                return res.json(user);
            })
            .catch((err) => err && res.sendStatus(409));
    },

    login: (req, res) => {
        const {email, password} = req.body;
        const key = crypto.createHash("md5").update(password).digest("hex");
        return User.findOne({email: email, password: key})
            .then((user) => {
                if (user.email === email) {
                    if (user.password === key) {
                        if (user.role === true) {
                            const token = jwt.sign({user: user},
                                process.env.SECRET_ADMIN, {
                                    expiresIn: "1h",
                                }
                            );
                            res.cookie("aToken", token, {
                                expires: new Date(Date.now() + 90000000),
                                // httpOnly: true,
                                // secure: true,
                                // sameSite: true
                            });
                            //TODO user id send with cookie
                            res.json({isAdmin: user.role, aToken: token});
                        } else {
                            const token = jwt.sign({id: user._id}, process.env.SECRET, {
                                expiresIn: "1h",
                            });
                            res.cookie("token", token, {
                                expires: new Date(Date.now() + 90000000),
                                // secure: true,
                                // sameSite: true
                                // httpOnly: true,
                            });
                            res.send({user, token});
                        }
                    } else {
                        console.log("err 1 ");
                        res.sendStatus(403);
                    }
                } else {
                    console.log("err 2 ");
                    res.sendStatus(403);
                }
            })
            .catch((err) => {
                console.log("Err === ", err);
                res.sendStatus(403);
            });
    },

    logout: async (req, res) => {
        res.clearCookie("token");
        res.clearCookie("aToken");
        res.sendStatus(200);
    },

    register: async (req, res) => {
        const {fName, lName, fatherName, phone, email, password} = req.body;
        const key = crypto.createHash("md5").update(password).digest("hex");
        return await User.findOne({email: email}).then((user) => {
            if (!user) {
                User.create({
                    fName,
                    lName,
                    fatherName,
                    phone,
                    email,
                    password: key,
                    role: false,
                })
                    .then((user) => {
                        const token = jwt.sign({id: user._id}, process.env.SECRET, {
                            expiresIn: "1h",
                        });
                        res.send({token, user});
                    })
                    .catch((err) => {
                        console.log(err);
                        res.sendStatus(400)
                    });
            } else {
                res.sendStatus(409);
            }
        });
    },

    updateUser: async (req, res) => {
        const {
            id, fName, lName, phone, email, fatherName,
            deliveryCity,
            deliveryStreet,
            deliveryHouse,
            deliveryApartament,
            deliveryWarehouse,
        } = req.body;
        return await User.findByIdAndUpdate(
            id, {
                fName,
                lName,
                phone,
                email,
                fatherName,
                deliveryCity,
                deliveryStreet,
                deliveryHouse,
                deliveryApartament,
                deliveryWarehouse
            },
            (err, user) => {
                if (err) return res.sendStatus(400);
                console.log(user);
                res.send(user);
            }
        );
        // .then((user) => res.json(user))
        // .catch((err) => err && res.sendStatus(409));
    },

    restorePassword: (req, res) => {
        const {email} = req.body;
        const date = new Date();
        const randomizerPass = `${date.getMilliseconds()}${date.getSeconds()}`
        return User.findOneAndUpdate({email: email}, {password: randomizerPass})
            .then((user) => {
                if (user) {
                    function sendMessage(auth) {
                        const gmail = google.gmail({version: 'v1', auth});
                        const raw = makeBody(email, 'medtechnika.te@gmail.com', 'Відновлення паролю',
                            `<a href="https://medtechnika.te.ua/restore/${randomizerPass}/${email}">Натисніть для відновлення паролю</a>>`);
                        gmail.users.messages.send({
                            auth: auth,
                            userId: 'me',
                            resource: {
                                raw: raw
                            }
                        }, function (err, response) {
                            console.log(err || response)
                        });
                    }

                    fs.readFile('credentials.json', (err, content) => {
                        if (err) return console.log('Error loading client secret file:', err);
                        authorize(JSON.parse(content), sendMessage);
                    });
                    // jwt.sign()
                    res.sendStatus(200);
                } else {
                    res.sendStatus(400);
                }
            })
            .catch((err) => err && res.sendStatus(409));
    },

    changePassword: (req, res) => {
        const {email, password, code} = req.body;
        const key = crypto.createHash("md5").update(password).digest("hex");
        return User.findOne({email: email})
            .then((user) => {
                user.password === code ?
                    User.findOneAndUpdate({email: email}, {password: key}).then(changedUser => {
                        console.log(changedUser)
                    }).catch(e => {
                        console.log(e)
                        res.sendStatus(400)
                    }) :
                    res.sendStatus(400)
                // jwt.verify()
                res.send("pass changed successfully");
            })
            .catch((err) => res.send(err));
    },

    restoreUser: async (req, res) => {
        const {id} = req.params;
        return await User.findByIdAndUpdate({_id: ObjectId(id)}, {deletedAt: null})
            .then((user) => res.json(user))
            .catch((err) => res.send(err));
    },

    softDeleteUser: async (req, res) => {
        const {id} = req.params;
        return await User.findByIdAndUpdate({_id: ObjectId(id)}, {deletedAt: Date.now()})
            .then((user) => res.json(user))
            .catch((err) => res.send(err));
    },

    deleteUser: async (req, res) => {
        const {id} = req.params;
        return await User.findByIdAndRemove({_id: ObjectId(id)})
            .then((user) => res.json(user))
            .catch((err) => res.send(err));
    },

    cbFb: (req, res) => {
        const {user} = req;
        console.log("FB USER === ", user);

        const token = jwt.sign({id: user._id},
            process.env.SECRET, {
                expiresIn: "1h",
            });
        console.log("FB TOKEN === ", token);

        res.cookie("token", token, {
            expires: new Date(Date.now() + 90000000),
            secure: true,
            httpOnly: true,
        });

        res.redirect("/profile");
        // res.send({ token, user });
    },

    cbGoogle: async (req, res) => {
        const {user} = req;
        console.log("GOOGLE USER === ", user);

        const token = jwt.sign({id: user._id},
            process.env.SECRET, {
                expiresIn: "1h",
            });
        console.log("GOOGLE TOKEN === ", token);

        res.cookie("token", token, {
            expires: new Date(Date.now() + 90000000),
            secure: true,
            httpOnly: true,
        });

        res.redirect("/profile");
        // res.send({ token, user });
    }
};
