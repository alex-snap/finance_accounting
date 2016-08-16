const Router = require('koa-router');

module.exports = app => {
    const router = new Router();

    router.use(function *(next) {
        this.type = 'json';
        yield  next;
    });
    app.use(router.routes());

    /**
     * register routes
     */
    require('./transfers/routes')(app);
    require('./account/routes')(app);
};