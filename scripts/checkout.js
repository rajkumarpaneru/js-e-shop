import { renderOrderSummery } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

async function loadPage() {

    await loadProductsFetch();

    // await new Promise((resolve) => {
    //     loadCart(() => {
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