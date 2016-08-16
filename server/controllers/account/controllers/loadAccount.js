const mongoose = require('mongoose');
const Transfer = mongoose.model('Transfer');

module.exports = function *() {
    const result = Transfer.aggregate(
        {
            $group: {
                _id: null,
                totalAmount: { $sum: { $add: "$amount"} }
            }
        }
    );

    this.body = {
        data: result
    };

    //const transfers = yield Transfer.find().exec();
    //

    //this.body = {
    //    data: {
    //        amount
    //    }
    //};
};