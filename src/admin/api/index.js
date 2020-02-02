const { NODE_ENV } = process.env;
const isDevelopmentMode = NODE_ENV === 'development';

const host = `http://${isDevelopmentMode ? 'localhost' : 'elcor58.ru'}:3000`;

export const getProductList = () =>
    fetch(`${host}/product_list`)
        .then(res => res.json())
        .catch(() => console.log('operation failed'));

export const removeProduct = id => {
    const formData = new FormData();
    formData.set('_id', id);

    return fetch(`${host}/remove_product`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .catch(() => console.log('operation failed'));
};

export const addProduct = formData =>
    fetch(`${host}/add_product`, {
        body: formData,
        method: 'POST'
    })
        .then(res => res.json())
        .catch(() => console.log('operation failed'));

export const updateProduct = formData =>
    fetch(`${host}/update_product`, {
        body: formData,
        method: 'POST'
    })
        .then(res => res.json())
        .catch(() => console.log('operation failed'));
