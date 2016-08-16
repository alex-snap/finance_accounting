import { injectAsyncReducer } from 'modules/app';

/**
 * @public
 * @param {Object} store
 * @returns {Object} - routes settings
 */
export function createRoutes(store) {
  return {
    path: '/',
    getComponent(location, callback) {
      require.ensure([], (require) => {
        const transfersModule = require('modules/transfers').default;
        injectAsyncReducer(store, transfersModule.name, transfersModule.reducer);
        callback(null, transfersModule.container);
      });
    }
  };
}