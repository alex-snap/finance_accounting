import axios from 'axios';

import api from 'api-config';

const instance = axios.create({
    baseURL: api.BASE_API_URL
});

export default instance;