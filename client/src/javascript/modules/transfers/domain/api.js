import errorFactory from 'infrastructure/factories/errorFactory';
import transferUrlResourceFactory from './transferUrlResourceFactory';
import transferStatisticUrlResourceFactory from './transferStatisticUrlResourceFactory';

const transferUrlResource = transferUrlResourceFactory.createResource();

/**
 * @public
 * @param {Object} data
 * @returns {Promise.<Object>}
 */
export function createTransfer(data) {
    return transferUrlResource.create(data)
        .catch((res) => {
            const error = errorFactory.createError(res);
            return Promise.reject(error);
        });
}

/**
 * @public
 * @param {Object} loadParams
 * @returns {Promise.<Array>}
 */
export function loadTransfers(loadParams) {
    console.log(loadParams);
    return transferUrlResource.load(loadParams)
        .catch((res) => {
            const error = errorFactory.createError(res);
            return Promise.reject(error);
        });
}

const transferStatisticUrlResource = transferStatisticUrlResourceFactory.createResource();

/**
 * @public
 * @returns {Promise}
 */
export function loadTransfersStatistic() {
    return transferStatisticUrlResource.load()
        .catch((res) => {
            const error = errorFactory.createError(res);
            return Promise.reject(error);
        });
}