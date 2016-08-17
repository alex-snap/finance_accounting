const loadTransfersCtrl = require('./controllers/loadTransfers');
const loadTransfersStatisticCtrl = require('./controllers/loadTransfersStatistic');
const createTransferCtrl = require('./controllers/createTransfer');

const Router = require('koa-router');
const router = new Router({
    prefix: '/transfers'
});

module.exports = app => {
    router.post('/', createTransferCtrl);
    router.get('/', loadTransfersCtrl);
    router.get('/statistic', loadTransfersStatisticCtrl);

    app.use(router.routes());
};