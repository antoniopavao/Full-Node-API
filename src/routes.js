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
        endpoint: "/users",
        method: 'POST',
        handler: UserController.createUser,
    },

    {
        endpoint: "/users/:id",
        method: 'PUT',
        handler: UserController.updateUserById,
    },

    {
        endpoint: "/users/:id",
        method: 'DELETE',
        handler: UserController.deleteUserById,
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

    {
        endpoint: "/products",
        method: 'POST',
        handler: ProductController.createProduct,
    },


]