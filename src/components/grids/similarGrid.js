/*
Sources 16.nov:
- slice number of products to show: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- forEach loop - comment keenthinker: https://stackoverflow.com/questions/21811630/splicing-a-javascript-array-from-within-the-callback-passed-to-foreach
*/

import { getProductsByTags } from "../../utils/fetch.js";
import { prouductCard } from "../cards/productCard.js";

export async function similarGrid() {
    const grid = document.createElement('div');
    grid.className = 'product__grid grid__padding';
    const products = await getProductsByTags(['headphones', 'storage', 'electronics', 'audio', 'accessories', 'watches', 'watch', 'wearables', 'peripherals', 'gaming', 'computers']);

    products.slice(0, 4).forEach(product => {
        const card = prouductCard(product);
        grid.appendChild(card);
    });

    return grid;
}