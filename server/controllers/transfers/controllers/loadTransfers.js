const mongoose = require('mongoose');
const Transfer = mongoose.model('Transfer');

module.exports = function *() {
    const defaults = {
        page: 1,
        limit: 10
    };

    const result = yield Transfer.paginate({}, defaults);

    this.body = {
        data: result.docs,
        meta: {
            total: result.total
        }
    };
};