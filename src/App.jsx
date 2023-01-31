import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Provider>
    </div>
  );
};

export default App;
