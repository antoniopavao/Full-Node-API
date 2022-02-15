const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");


module.exports = [{
        endpoint: "/users",
        method: 'GET',
        handler: UserController.listUsers,
    },

    {
        endpoint: "/users/:id",
        method: 'GET',
        handler: UserController.getUsersById,
    },

    {
        endpoint: "/products",
        method: 'GET',
        handler: ProductController.listProducts,
    },

    {
        endpoint: "/products/:id",
        method: 'GET',
        handler: ProductController.getProductsById,
    },

]