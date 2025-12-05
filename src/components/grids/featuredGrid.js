import { getProductsByTags } from "../../utils/fetch.js";
import { prouductCard } from "../cards/productCard.js";

/**
 * Generates a featured product grid.
 * @returns {Promise<HTMLElement>} The featured product grid element.
 */
export async function featuredGrid() {
  const grid = document.createElement('div');
  grid.className = 'product__grid';
  const products = await getProductsByTags(['headphones', 'storage', 'electronics', 'audio', 'accessories', 'watches', 'watch', 'wearables', 'peripherals', 'gaming', 'computers']);

  products.slice(0, 12).forEach(product => {
    const card = prouductCard(product);
    grid.appendChild(card);
  });

  return grid;
}