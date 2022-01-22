const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.findAll);
    app.post('/api/products', ProductController.createNewProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.delete('/api/products/:id', ProductController.deleteOneProduct);
    app.put('/api/products/:id', ProductController.updateOneProduct);
}