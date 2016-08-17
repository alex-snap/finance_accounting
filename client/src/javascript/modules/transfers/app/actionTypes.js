import { NAME } from './constants';

/**
 * Load transfers
 */
export const LOAD_TRANSFERS = {
    REQUEST: `${NAME}/LOAD_TRANSFERS_REQUEST`,
    SUCCESS: `${NAME}/LOAD_TRANSFERS_SUCCESS`,
    FAILED: `${NAME}/LOAD_TRANSFERS_FAILED`
};

/**
 * Create transfer
 */
export const CREATE_TRANSFER = {
    REQUEST: `${NAME}/CREATE_TRANSFER_REQUEST`,
    SUCCESS: `${NAME}/CREATE_TRANSFER_SUCCESS`,
    FAILED: `${NAME}/CREATE_TRANSFER_FAILED`
};

/**
 * Load transfers statistic
 */
export const LOAD_TRANSFERS_STATISTIC = {
    REQUEST: `${NAME}/LOAD_TRANSFERS_STATISTIC_REQUEST`,
    SUCCESS: `${NAME}/LOAD_TRANSFERS_STATISTIC_SUCCESS`,
    FAILED: `${NAME}/LOAD_TRANSFERS_STATISTIC_FAILED`
};