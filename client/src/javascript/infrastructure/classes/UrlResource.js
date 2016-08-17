/**
 * @class UrlResource
 */
class UrlResource {
    /**
     * @param {Object} axiosInstance
     * @param {string} url
     */
    constructor(axiosInstance, url) {
        this._api = axiosInstance;
        this._url = url;
    }

    /**
     * @public
     * @param {Object} data
     * @returns {Promise}
     */
    create(data) {
        const reqData = this._prepareForRequest(data);
        return this._api.post(this._url, reqData).then((response) => this._processResponse(response));
    }

    /**
     * @public
     * @param {Object} data
     * @returns {Promise}
     */
    update(data) {
        const reqData = this._prepareForRequest(data);
        return this._api.put(this._url, reqData).then((response) => this._processResponse(response));
    }

    /**
     * @public
     * @param {Object} params
     * @returns {Promise}
     */
    load(params) {
        return this._api.get(this._url, { params }).then((response) => this._processResponse(response));
    }

    /**
     * @public
     * @returns {Promise}
     */
    delete() {
        return this._api.delete(this._url).then((response) => this._processResponse(response));
    }

    /**
     * @public
     * @param {string} path
     * @returns {UrlResource}
     */
    all(path) {
        return this._createInstance(path);
    }

    /**
     * @public
     * @param {string} path
     * @param {number|string} id
     * @returns {UrlResource}
     */
    one(path, id) {
        const resultPath = `${path}/${id}`;
        return this._createInstance(resultPath);
    }

    _createInstance(path) {
        const url = `${this._url}/${path}`;
        return new this.constructor(this._api, url);
    }

    _prepareForRequest(data) {
        return data;
    }

    _processResponse(response) {

        /**
         * data #1 - axios response object
         * data #2 - server data wrap
         */
        const data = _.get(response, 'data.data');

        /**
         * mix with meta information
         */
        if (_.isArray(data)) {
            data.meta = _.get(response, 'data.meta');
        }
        return data;
    }
}

export default UrlResource;