const loadAccountCtrl = require('./controllers/loadAccount');

const Router = require('koa-router');
const router = new Router({
    prefix: '/account'
});

module.exports = app => {
    router.get('/', loadAccountCtrl);

    app.use(router.routes());
};