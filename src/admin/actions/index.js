import * as actionTypes from '../actionTypes';

const actionCreator = type => data => ({
    type,
    data
});

export const setProductList = actionCreator(actionTypes.SET_PRODUCT_LIST);
export const setSelectedType = actionCreator(actionTypes.SET_SELECTED_TYPE);
export const setSelectedProductId = actionCreator(actionTypes.SET_SELECTED_PRODUCT_ID);
export const clearSelectedProductId = actionCreator(actionTypes.CLEAR_SELECTED_PRODUCT_ID);
