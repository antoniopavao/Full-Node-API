const products = require("../mocks/products");

module.exports = {
    listProducts(request, response) {

        const {
            order
        } = request.query;

        const sortedProducts = products.sort((a, b) => {
            if (order === 'desc') {
                return a.id < b.id ? 1 : -1;
            }
            return a.id > b.id ? 1 : -1;

        })
        response.send(200, sortedProducts);

    },
    getProductsById(request, response) {
        const {
            id
        } = request.params;

        const product = products.find((product) => product.id === Number(id));

        if (!product) {
            return response.send(400,{
                error: "Product not found"
            });
        };

        response.send(200, product);

    },

    createProduct(request, response) {
        let body = '';

        request.on('data', (chunk) => {
            body += chunk;
        })

        request.on('end', () => {
            console.log(body);
            body = JSON.parse(body);

            const lastProductId = products[products.length - 1].id;
            const newProduct = {
                id: lastProductId + 1,
                name: body.name
            }

            products.push(newProduct);
            response.send(200, newProduct);
        })

    }
}