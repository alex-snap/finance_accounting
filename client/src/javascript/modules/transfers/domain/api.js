import errorFactory from 'infrastructure/factories/errorFactory';
import transferUrlResourceFactory from './transferUrlResourceFactory';
import accountUrlResourceFactory from './accountUrlResourceFactory';

const transferUrlResource = transferUrlResourceFactory.createResource();

/**
 * @public
 * @param {Object} data
 * @returns {Promise.<Object>}
 */
export function createTransfer(data) {
    return transferUrlResource.create(data)
        .catch((res) => errorFactory.createError(res));
}

/**
 * @public
 * @param {Object} loadParams
 * @returns {Promise.<Array>}
 */
export function loadTransfers(loadParams) {
    return transferUrlResource.load(loadParams)
        .catch((res) => errorFactory.createError(res));
}

const accountUrlResource = accountUrlResourceFactory.createResource();

/**
 * @public
 * @returns {Promise}
 */
export function loadAccount() {
    return accountUrlResource.load()
        .catch((res) => errorFactory.createError(res));
}