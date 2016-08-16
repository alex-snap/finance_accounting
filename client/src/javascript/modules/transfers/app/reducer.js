import _ from 'lodash';
import * as ActionTypes from './actionTypes';
import { objectAssign, addToArray } from 'helpers/immutable';

const initialState = {
    transfers: [],

    isTransferCreating: false,
    isTransferCreateSuccess: false,
    transferCreateError: undefined,

    isTransfersLoading: false,
    transfersLoadError: undefined
};


/**
 * Internal helper
 * @private
 * @param {string} actionType
 * @param {Object} actionsNamespace
 * @returns {boolean}
 */
function isActionsContainsType(actionType, actionsNamespace) {
    const predicate = (type) => actionType === type;
    return _.some(_.values(actionsNamespace), predicate);
}

/**
 * Load transfer actions handler
 * @private
 * @param {Object} state
 * @param {IAppAction} action
 * @returns {Object} - State
 */
const createTransfersHandler = function (state, action) {
    switch (action.type) {
        case (ActionTypes.CREATE_TRANSFER.REQUEST):
            return objectAssign(state, {
                isTransferCreating: true,
                isTransferCreateSuccess: false,
                transferCreateError: undefined
            });
            break;
        case (ActionTypes.CREATE_TRANSFER.SUCCESS):
            return objectAssign(state, {
                transfers: addToArray(state.transfers, action.data),
                isTransferCreating: false,
                isTransferCreateSuccess: true
            });
            break;
        case (ActionTypes.CREATE_TRANSFER.FAILED):
            return objectAssign(state, {
                isTransfersLoading: false,
                isTransferCreateFailed: true,
                transferCreateError: action.data
            });
            break;
    }
};

/**
 * Load transfer actions handler
 * @private
 * @param {Object} state
 * @param {IAppAction} action
 * @returns {Object} - State
 */
const loadTransfersHandler = function (state, action) {
    switch (action.type) {
        case (ActionTypes.LOAD_TRANSFERS.REQUEST):
            return objectAssign(state, {
                isTransfersLoading: true,
                transfersLoadError: undefined
            });
            break;
        case (ActionTypes.LOAD_TRANSFERS.SUCCESS):
            return objectAssign(state, {
                transfers: action.data,
                isTransfersLoading: false
            });
            break;
        case (ActionTypes.LOAD_TRANSFERS.FAILED):
            return objectAssign(state, {
                isTransfersLoading: false,
                isTransfersLoadFailed: true,
                transfersLoadError: action.data
            });
            break;
        default:
            return objectAssign(state);
            break;
    }
};

/**
 * @public
 * @param {Object} state
 * @param {IAppAction} action
 * @returns {Function.<Object>} - Transfers Reducer
 */
export default function transfers(state = initialState, action = {}) {
    if (isActionsContainsType(action.type, ActionTypes.LOAD_TRANSFERS)) {
        return loadTransfersHandler(state, action);
    }
    if (isActionsContainsType(action.type, ActionTypes.CREATE_TRANSFER)) {
        return createTransfersHandler(state, action);
    }

    return objectAssign(state);
}