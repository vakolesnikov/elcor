import * as actions from '../actions';
import * as api from '../../api';

export const initApp = () => dispatch => {
    api.getProductList()
        .then(productList => dispatch(actions.setProductList({ productList: productList || [] })))
        .catch(err => console.log(err));
};

const changeProduct = (method, data, dispatch) =>
    api[`${method}Product`](data)
        .then(productList => dispatch(actions.setProductList({ productList: productList || [] })))
        .catch(err => console.log(err));

export const removeProduct = name => dispatch => changeProduct('remove', name, dispatch);
export const addProduct = formData => dispatch => changeProduct('add', formData, dispatch);
export const updateProduct = formData => dispatch => changeProduct('update', formData, dispatch);
