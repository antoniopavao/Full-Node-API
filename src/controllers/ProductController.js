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
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(sortedProducts));
    }
}
