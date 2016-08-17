const mongoose = require('mongoose');
const Transfer = mongoose.model('Transfer');

module.exports = function *() {
    const transfers = yield Transfer.find().exec();

    this.body = {
        data: transfers,
        meta: {
            total: transfers.length
        }
    };
};