import _ from 'lodash';
import UrlResource from './UrlResource';

/**
 * @class UrlResourceFactory
 */
class UrlResourceFactory {
    /**
     * @param {Object} axiosInstance
     * @param {Function.<string>|string} route
     */
    constructor(axiosInstance, route) {
        this.axiosInstance = axiosInstance;
        this.route = route;
    }

    /**
     * @public
     * @param {Object} [params = {}]
     * @returns {UrlResource}
     */
    createResource(params = {}) {
        const route = this._resolveRoute(params);
        return new UrlResource(this.axiosInstance, this.route);
    }

    /**
     * @private
     * @param {Object} params
     * @private
     */
    _resolveRoute(params) {
        if (_.isFunction(this.route)) {
            return this.route(params);
        }
        return this.route;
    }
}

export default UrlResourceFactory;