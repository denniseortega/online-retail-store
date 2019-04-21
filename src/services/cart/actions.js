import { LOAD_CART, ADD_ITEM, REMOVE_ITEM } from '.actionTypes';

export const load = items => ({
    type: LOAD_CART,
    payload: items
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: items
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
});