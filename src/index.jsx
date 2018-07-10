import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import postReducer from './reducers/post-reducer';

import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(postReducer);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
	module.hot.accept(require('./components/App'), () => {
		render(App);
	});
}
/*eslint-enable */
