import * as actionTypes from '../actionTypes';

export const setProductList = data => ({
    type: actionTypes.SET_PRODUCT_LIST,
    data
});

export const setSelectedProductId = data => ({
    type: actionTypes.SET_SELECTED_PRODUCT_ID,
    data
});

export const clearSelectedProductId = data => ({
    type: actionTypes.CLEAR_SELECTED_PRODUCT_ID,
    data
});
