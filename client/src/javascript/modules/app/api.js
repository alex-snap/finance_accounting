import { createStore, combineReducers } from 'redux';

import { objectAssign } from 'helpers/immutable';
import rootReducer from './reducer';

/**
 * @private
 * @param {Object} [dynamicReducers]
 * @returns {Object}
 */
const createReducer = function(dynamicReducers) {
    return combineReducers(objectAssign({ root: rootReducer }, dynamicReducers));
};

/**
 * @public
 * @param {Object} [initialState = {}]
 * @returns {Object}
 */
export function configureStore(initialState = {}) {
    const store = createStore(createReducer(), initialState);
    store.dynamicReducers = {};
    return store;
}

/**
 * @public
 * @param {Object} store
 * @param {string} name
 * @param {Function} reducer
 */
export function injectAsyncReducer(store, name, reducer) {
    store.dynamicReducers[name] = reducer;
    store.replaceReducer(createReducer(store.dynamicReducers));
}