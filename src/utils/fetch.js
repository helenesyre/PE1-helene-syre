import { useFetch } from './useFetch.js';

/**
 * Fetches products from the online shop and filters them by the specified tag.
 * @param {string} tag - The tag to filter products by.
 * @returns {Array} - An array of products that match the specified tag.
 */
export async function getProductsByTag(tag) {
  const data = await useFetch('/online-shop');
  return data.data.filter(product => product.tags.includes(tag));
}

/**
 * Fetches products from the online shop and filters them by the specified tags.
 * @param {Array} tags - An array of tags to filter products by.
 * @returns {Array} - An array of products that match any of the specified tags.
 */
export async function getProductsByTags(tags) {
  const data = await useFetch('/online-shop');
  return data.data.filter(product =>
    tags.some(tag => product.tags.includes(tag))
  );
}

/**
 * Fetches all products from the online shop.
 * @returns {Array} - An array of all products.
 */
export async function getAllProducts() {
  const data = await useFetch('/online-shop');
  return data.data;
}

/**
 * Fetches a product by its ID from the online shop.
 * @param {string} id - The ID of the product to fetch.
 * @returns {Object} - The product object.
 */
export async function getProductById(id) {
  const data = await useFetch(`/online-shop/${id}`);
  return data.data;
}

/**
 * Fetches products by their IDs from the online shop.
 * @param {Array} ids - An array of product IDs to fetch.
 * @returns {Array} - An array of products that match the specified IDs.
 */
export async function getProductsByIds(ids) {
  const data = await useFetch('/online-shop');
  return data.data.filter(product => ids.includes(product.id)).sort((a, b) => {
    return ids.indexOf(a.id) - ids.indexOf(b.id);
  });
}