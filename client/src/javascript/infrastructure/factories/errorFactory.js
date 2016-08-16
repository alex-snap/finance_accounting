/**
 * @public
 * @param {Object} error
 * @returns {Error}
 */
const createError = function (error) {
    const message = error.message || 'Something was wrong';
    const result = new Error(message);
    result.response = error.response;
    return result;
};

export default {
    createError
};