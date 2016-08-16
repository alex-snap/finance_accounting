const _ = require('lodash');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
    env: env
};

const specific = {
    development: {
        app: {
            port: 3000
        },
        mongo: {
            url:'mongodb://localhost/finance_accounting'
        }
    }
};

module.exports = _.merge(baseConfig, specific[env]);