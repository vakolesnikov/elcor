import * as actionTypes from '../actionTypes';

const initialState = {
    productList: [],
    selectedProductId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT_LIST: {
            const { productList } = action.data;

            return {
                ...state,
                productList
            };
        }

        case actionTypes.SET_SELECTED_PRODUCT_ID: {
            const { id } = action.data;

            return {
                ...state,
                selectedProductId: id
            };
        }

        case actionTypes.CLEAR_SELECTED_PRODUCT_ID: {
            return {
                ...state,
                selectedProductId: null
            };
        }

        default: {
            return state;
        }
    }
};
