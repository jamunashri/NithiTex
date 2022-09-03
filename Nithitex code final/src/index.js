import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './AdminDashboard/redux/reducers/index'

const store = createStore(
  rootReducer
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

