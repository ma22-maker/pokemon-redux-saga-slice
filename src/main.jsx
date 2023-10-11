import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react"
import App from './App.jsx'
import './index.css'
import store from './GlobalStore/reduxStore.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
      <Provider store={store}>
       <App />
      </Provider>
      </BrowserRouter>   
    </NextUIProvider>   
  </React.StrictMode>,
)
