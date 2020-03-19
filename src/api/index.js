const { NODE_ENV } = process.env;
const isDevelopmentMode = NODE_ENV === 'development';

export const host = `http://${isDevelopmentMode ? 'localhost' : 'elcor58.ru'}:3000`;

const fetchPost = (formData, url) => {
    return fetch(`${host}/${url}`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .catch(() => console.log('operation failed'));
};

const fetchGet = url => {
    return fetch(`${host}/${url}`)
        .then(res => res.json())
        .catch(() => console.log('operation failed'));
};

export const getProductList = () => fetchGet('product_list');

export const removeProduct = id => {
    const formData = new FormData();
    formData.set('_id', id);

    return fetchPost('remove_product', formData);
};

export const addProduct = formData => fetchPost('add_product', formData);
export const updateProduct = formData => fetchPost('update_product', formData);
