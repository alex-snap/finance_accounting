const mongoose = require('mongoose');
const Transfer = mongoose.model('Transfer');
const _ = require('lodash');

const transferTypeEnum = require('../enums/transferTypeEnum');

module.exports = function *() {
    var transfers = yield Transfer.find().exec();
    var amount = _.reduce(transfers, (amountMemo, transfer) => {
        switch (transfer.type) {
            case transferTypeEnum.Add:
                amountMemo += transfer.amount;
                break;
            case transferTypeEnum.Cost:
                amountMemo -= transfer.amount;
                break;
            default:
                // nothing
                break;
        }
        return amountMemo;
    }, 0);

    this.body = {
        data: {
            currentAmount: amount
        }
    };
};