var Transfer = require('mongoose').model('Transfer');

module.exports = function *() {

    if (!this.request.body) {
        this.throw('The body is empty', { test: '123'});
    }
    if (!this.request.body.type) {
        this.throw('Type is empty', { test: '123'});
    }
    if (!this.request.body.description) {
        this.throw('Description is empty', { test: '123'});
    }
    if (!this.request.body.contractor) {
        this.throw('Contractor is empty', { test: '123'});
    }
    if (!this.request.body.amount) {
        this.throw('Amount is empty', { test: '123'});
    }

    var transfer = new Transfer({
        type: this.request.body.type,
        description: this.request.body.description,
        contractor: this.request.body.contractor,
        amount: this.request.body.amount
    });

    try {
        transfer = yield transfer.save();
    } catch (err) {
        this.throw(err);
    }

    this.body = {
        data: transfer
    };
};