import * as ActionsTypes from './actionTypes';
import * as api from '../domain/api';

/**
 * @public
 * @param {Function} dispatch
 * @param {Object} transferData
 */
export function createTransfer(dispatch, transferData) {
    dispatch({ type: ActionsTypes.CREATE_TRANSFER.REQUEST, data: transferData });

    api.createTransfer(transferData)
        .then((savedTransfer) => {
            dispatch({ type: ActionsTypes.CREATE_TRANSFER.SUCCESS, data: savedTransfer });
        })
        .catch((error) => {
            dispatch({ type: ActionsTypes.CREATE_TRANSFER.FAILED, data: error });
        });
}

/**
 * @public
 * @param {Function} dispatch
 * @param {Object} loadParams
 */
export function loadTransfers(dispatch, loadParams) {
    dispatch({ type: ActionsTypes.LOAD_TRANSFERS.REQUEST, data: loadParams });

    api.loadTransfers(loadParams)
        .then((transfers) => {
            dispatch({ type: ActionsTypes.LOAD_TRANSFERS.SUCCESS, data: transfers });
        })
        .catch((error) => {
            dispatch({ type: ActionsTypes.LOAD_TRANSFERS.FAILED, data: error });
        });
}