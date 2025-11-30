import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/PE1-helene-syre',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                product: resolve(__dirname, 'product/index.html'),
                comingsoon: resolve(__dirname, 'coming-soon/index.html'),
                cart: resolve(__dirname, 'cart/index.html'),
                success: resolve(__dirname, 'cart/success.html'),
                checkout: resolve(__dirname, 'cart/checkout.html'),
                login: resolve(__dirname, 'account/login.html'),
                register: resolve(__dirname, 'account/register.html'),
            },
        },
    },
});