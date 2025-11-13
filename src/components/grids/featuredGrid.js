import { getProductsByTags } from "../../utils/fetch.js";
import { prouductCard } from "../cards/productCard.js";

export async function featuredGrid() {
    const grid = document.createElement('section');
    grid.className = 'product__grid';
    const products = await getProductsByTags(['headphones', 'storage', 'electronics', 'audio', 'accessories', 'watches', 'watch', 'wearables', 'peripherals', 'gaming', 'computers']);

    products.forEach(product => {
        const card = prouductCard(product);
        grid.appendChild(card);
    });

    return grid;
}