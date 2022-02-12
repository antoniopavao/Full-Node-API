const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");


module.exports = [
    {
        endpoint: "/users",
        method: 'GET',
        handler: UserController.listUsers,
    },

    {
        endpoint: "/products",
        method: 'GET',
        handler: ProductController.listProducts,
    },

]