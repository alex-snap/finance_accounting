import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Internal modules
 */
import { configureStore } from 'modules/app';
import createRoutes from 'routes';

import '../stylesheets/application.sass';

const store = configureStore();
const routes = createRoutes(store);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);