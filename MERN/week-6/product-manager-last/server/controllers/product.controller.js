const Product = require('../models/product.model');


module.exports = {
    findAll: function (req, res) {
        Product.find()
            .then(allProducts => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch(err => {
                console.log("Find All Products failed");
                res.json({ message: "Something went wrong in findAll", error: err });
            })
    },
    // createNewProduct: function (req, res) {
    //     Product.create(req.body)
    //         .then(newProduct => {
    //             console.log(newProduct);
    //             res.json(newProduct);
    //         })
    //         .catch((err) => {
    //             console.log("Something went wrong in createNewProduct");
    //             res.json({ message: "Something went wrong in createNewProduct", error: err });
    //         })
    // },
    createNewProduct: function (req, res) {
        Product.create(req.body)
            .then(newProduct => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch(err => {
                console.log("Something went wrong in createNewProduct");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in createNewProduct", error: err });
            })
    },
    findOneProduct: function (req, res) {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch(err => {
                console.log("Find One Product failed");
                res.json({ message: "Something went wrong in findOneProduct", error: err });
            })
        },
    deleteOneProduct: function (req, res) {
        Product.deleteOne({ _id: req.params.id })
            .then(deletedProduct => {
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch(err => {
                console.log("delete One Product failed");
                res.json({ message: "Something went wrong in deleteOneProduct", error: err });
            })
        },
    updateOneProduct: function (req, res) {
        Product.updateOne(
            { _id: req.params.id },
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedProduct => {
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch(err => {
                console.log("update One Product failed");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in updateOneProduct", error: err });
            })
        }
    }
