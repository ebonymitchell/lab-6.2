import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport
} from "./apiSimulator.js";

fetchProductCatalog()
    .then((products) => {
        console.log("Product Catalog:", products);

        return Promise.all(
            products.map((product) => {
                return fetchProductReviews(product.id)
                    .then((reviews) => {
                        console.log(`Reviews for ${product.name}:`, reviews);
                    })
                    .catch((error) => {
                        console.error(`Review error for ${product.name}:`, error);
                    });
            })
        );
    })
    .catch((error) => {
        console.error("Catalog error:", error);
    })
    .then(() => {
        return fetchSalesReport()
            .then((report) => {
                console.log("Sales Report:", report);
            })
            .catch((error) => {
                console.error("Sales report error:", error);
            });
    })
    .finally(() => {
        console.log("All API requests attempted.");
    });