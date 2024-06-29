import { renderOrderSummery } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

async function loadPage() {
    try {
        // throw 'error';

        await loadProductsFetch();
    } catch(error){
        console.log('Error while fetching products.');
    }
    

    // await new Promise((resolve, reject) => {
    //     throw 'error';
    //     loadCart(() => {
    //         reject('error3');
    //         resolve();
    //     });
    // });

    renderOrderSummery();

    renderPaymentSummary();
}

loadPage();

// Promise.all([
//     loadProductsFetch(),
// ]).then((values) => {
//     renderOrderSummery();
//     renderPaymentSummary();
// });

// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve();
//         });
//     }).then(() => {
//         renderOrderSummery();
//         renderPaymentSummary();
//     });

/*
loadProducts(() => {
    renderOrderSummery();
    renderPaymentSummary();
});
*/