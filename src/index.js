import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';
import 'normalize.css';
import createSagaMiddlware from 'redux-saga';
import { rootReducer } from './redux/rootReducer';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { forbiddenWordsMiddleware } from './redux/middlware';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddlware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
