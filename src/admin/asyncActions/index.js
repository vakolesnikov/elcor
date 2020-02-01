import * as actions from '../actions';
import * as api from '../api';

export const initApp = () => dispatch => {
    api.getProductList()
        .then(productList => dispatch(actions.setProductList({ productList: productList || [] })))
        .catch(err => console.log(err));
};

export const removeProduct = name => dispatch => {
    api.removeProduct(name)
        .then(productList => dispatch(actions.setProductList({ productList: productList || [] })))
        .catch(err => console.log(err));
};

export const addProduct = formData => dispatch => {
    api.addProduct(formData)
        .then(productList => dispatch(actions.setProductList({ productList: productList || [] })))
        .catch(err => console.log(err));
};

export const updateProduct = formData => dispatch => {
    api.updateProduct(formData)
        .then(productList => dispatch(actions.setProductList({ productList: productList || [] })))
        .catch(err => console.log(err));
};
