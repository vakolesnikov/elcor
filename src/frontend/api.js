const host = process.env.NODE_ENV === 'development' ? 'localhost' : 'elcor58.ru';
const PORT = 3000;

export const originHost = `http://${host}:${PORT}`;

export function getProductList() {
    return fetch(`${originHost}/product_list`).then(res => res.json());
}
