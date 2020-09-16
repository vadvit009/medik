const {User} = require("../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const {restorePassword} = require("../mailer");
const {ObjectId} = require("mongoose").Types;

module.exports = {
    getAllUsers: async (req, res) => {
        return await User.find({})
            .then((users) => res.json(users))
            .catch((err) => console.log(err));
    },

    getUser: async (req, res) => {
        const {id} = req.body;
        console.log(id)
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
                                httpOnly: true,
                                secure: true,
                            });
                            //TODO user id send with cookie
                            res.json({isAdmin: user.role, aToken: token});
                        } else {
                            const token = jwt.sign({id: user._id}, process.env.SECRET, {
                                expiresIn: "1h",
                            });
                            res.cookie("token", token, {
                                expires: new Date(Date.now() + 90000000),
                                secure: true,
                                httpOnly: true,
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
        res.header("authorization", null);
        res.send("logout");
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
        const {id, fName, lName, phone, email, fatherName, gallery} = req.body;
        return await User.findByIdAndUpdate(
            id, {
                fName,
                lName,
                phone,
                email,
                fatherName,
                gallery,
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

    restorePassword: async (req, res) => {
        const {email} = req.body;
        return await User.findOne({email: email})
            .then((user) => {
                if (user) {
                    restorePassword(email);
                    // jwt.sign()
                    res.sendStatus(200);
                } else {
                    res.sendStatus(400);
                }
            })
            .catch((err) => err && res.sendStatus(409));
    },

    changePassword: async (req, res) => {
        const {email, password} = req.body;
        const key = crypto.createHash("md5").update(password).digest("hex");
        return await User.findOne({email: email}, {password: key})
            .then((user) => {
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

        res.redirect("/api/v1/user");
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