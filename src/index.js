import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import store from './redux/store';
import reducer from './redux/reducer';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
