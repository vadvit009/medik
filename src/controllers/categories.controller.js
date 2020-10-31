const {Category} = require("../models");

const path = require('path');
const fs = require('fs');

const multer = require('multer');
const folderPath = path.resolve(__dirname, "../../build/assets/category/");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const { id } = req.params;
        if (!fs.existsSync(folderPath + "/" + id)) {
            fs.mkdirSync(folderPath + "/" + id);
        } else {
            fs.rmdirSync(folderPath + "/" + id, { recursive: true });
            fs.mkdirSync(folderPath + "/" + id);
        }
        cb(null, folderPath + "/" + id);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const getAllCategories = async (req, res) => {
    return await Category.find()
        .populate({
            path: "parentID",
            select: "title",
        })
        .populate({
            path: "subParentID",
            select: "title",
        })
        .exec((err, result) => {
            if (err) return res.send(err);
            res.send(result);
        });
};

const getAllLookupCategoies = async (req, res) => {
    await Category.aggregate([
        {
            $lookup: {
                from: "category",
                localField: "parentID",
                foreignField: "_id",
                as: "parent",
            },
        },
        {
            $lookup: {
                from: "category",
                localField: "subParentID",
                foreignField: "_id",
                as: "sub",
            },
        },
        {
            $project: {
                parent: 1,
                sub: 1,
                title: 1,
                gallery: 1
            },
        },
    ]).exec((err, result) => {
        if (err) return res.send(err);
        res.send(result);
    });
};

const createCategory = async (req, res) => {
    const {parentID, subParentID, title, desc, gallery} = req.body;
    return await Category.create({
        parentID,
        subParentID,
        title,
        desc,
        gallery,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        deletedAt: null,
    })
        .then((cat) => {
            res.send(cat)
        })
        .catch((err) => {
            console.log(err);
            // res.sendStatus(400)
            res.redirect('/categories');
        });
};

const patchCategory = async (req, res) => {
    try {
        const {
            parentID,
            subParentID,
            title,
            desc,
            gallery
        } = req.body;
        const {id} = req.params;
        const updated = await Category.findByIdAndUpdate(id, {
            parentID,
            subParentID,
            title,
            desc,
            gallery
        }, {new: true});
        res.send(updated);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }

}

const deleteCategory = async (req, res) => {
    const {id} = req.params;
    return await Category.findByIdAndDelete(id).exec((err) => {
        if (err) {
            console.log("ERROR WHEN DELETE CATEGORY === ", err);
            return res.sendStatus(400);
        }
        res.sendStatus(200);
    });
};

const uploadPhoto = (req, res) => {
    const { id } = req.params;

    upload.single('gallery')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log('ERR WHEN UPLOAD', err);
            return res.sendStatus(500);
        } else if (err) {
            console.log('ERR WHEN UPLOAD', err);
            return res.sendStatus(500);
        }
        const defaultUrl = "https://medtechnika.te.ua/assets/category/";
        console.log("REQ.FILE === ", req.file);
        console.log("REQ.FILES === ", req.files);
        Category.findByIdAndUpdate(id, { gallery: [defaultUrl + id + '/' + req.file.originalname] })
            .then(() => console.log("Updated successfully"))
            .catch(err => { console.log("ERROR WHEN UPLOAD NEWS === ", err); res.sendStatus(400) })
        return res.status(200).send(req.file);
    });
}

module.exports = {
    getAllCategories,
    getAllLookupCategoies,
    createCategory,
    deleteCategory,
    patchCategory,
    uploadPhoto
};
