import _ from 'lodash';
import * as ActionTypes from './actionTypes';
import { objectAssign, addToArray } from 'helpers/immutable';
import transferTypeEnum from '../domain/transferTypeEnum';

const initialState = {
    transfers: [],

    isTransferCreating: false,
    isTransferCreateSuccess: false,
    transferCreateError: undefined,

    isTransfersLoading: false,
    isTransfersLoadSuccess: false,
    transfersLoadError: undefined,

    transfersStatistic: {},
    isTransfersStatisticLoading: false,
    isTransfersStatisticLoadSuccess: false,
    transfersStatisticLoadError: undefined
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
 * Update transfer statistic state after create new transfer
 * @private
 * @param {Object} prevStatistic
 * @param {Object} createdTransfer
 * @returns {Object}
 */
const updateTransfersStatistic = function (prevStatistic, createdTransfer) {
    let updatedAmount;

    switch (createdTransfer.type) {
        case transferTypeEnum.Add:
            updatedAmount = prevStatistic.currentAmount + createdTransfer.amount;
            break;
        case transferTypeEnum.Cost:
            updatedAmount = prevStatistic.currentAmount - createdTransfer.amount;
            break;
    }

    return objectAssign(prevStatistic, {
        currentAmount: updatedAmount
    });
};

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
                isTransferCreateSuccess: true,
                transfersStatistic: updateTransfersStatistic(state.transfersStatistic, action.data)
            });
            break;
        case (ActionTypes.CREATE_TRANSFER.FAILED):
            return objectAssign(state, {
                isTransfersLoading: false,
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
                isTransfersLoadSuccess: false,
                transfersLoadError: undefined
            });
            break;
        case (ActionTypes.LOAD_TRANSFERS.SUCCESS):
            return objectAssign(state, {
                transfers: action.data,
                isTransfersLoading: false,
                isTransfersLoadSuccess: true
            });
            break;
        case (ActionTypes.LOAD_TRANSFERS.FAILED):
            return objectAssign(state, {
                isTransfersLoading: false,
                transfersLoadError: action.data
            });
            break;
        default:
            return objectAssign(state);
            break;
    }
};

/**
 * Load transfer statistic actions handler
 * @private
 * @param state
 * @param action
 */
const loadTransfersStatisticHandler = function (state, action) {
    switch (action.type) {
        case (ActionTypes.LOAD_TRANSFERS_STATISTIC.REQUEST):
            return objectAssign(state, {
                isTransfersStatisticLoading: true,
                isTransfersStatisticLoadSuccess: false,
                transfersStatisticLoadError: undefined
            });
            break;
        case (ActionTypes.LOAD_TRANSFERS_STATISTIC.SUCCESS):
            return objectAssign(state, {
                transfersStatistic: action.data,
                isTransfersStatisticLoading: false,
                isTransfersStatisticLoadSuccess: true
            });
            break;
        case (ActionTypes.LOAD_TRANSFERS_STATISTIC.FAILED):
            return objectAssign(state, {
                isTransfersStatisticLoading: false,
                transfersStatisticLoadError: action.data
            });
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
    if (isActionsContainsType(action.type, ActionTypes.LOAD_TRANSFERS_STATISTIC)) {
        return loadTransfersStatisticHandler(state, action);
    }

    return objectAssign(state);
}