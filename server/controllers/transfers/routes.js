const loadTransfersCtrl = require('./controllers/loadTransfers');
const createTransferCtrl = require('./controllers/createTransfer');

const Router = require('koa-router');
const router = new Router({
    prefix: '/transfers'
});

module.exports = app => {
    router.post('/', createTransferCtrl);
    router.get('/', loadTransfersCtrl);

    app.use(router.routes());
};