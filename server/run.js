const config = require('./config');
const app = module.exports = require('koa')();
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const cors = require('koa-cors');

/**
 * connect to db
 */
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.url);
mongoose.connection.on('error', (error) => {
    console.log(error);
    console.log('mongo error');
});

app.use(bodyParser());
app.use(cors());

/**
 * models
 */
require('./models/index');

/**
 * api routes
 */
require('./controllers/setup')(app);

app.listen(config.app.port);
console.log("Server started, listening on port: " + config.app.port);