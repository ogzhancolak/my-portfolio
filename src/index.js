import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeModeProvider from './contexts/ThemeContext';
// Redux is used insteadof ContextAPI 
//import LanguageContextProvider from './contexts/LanguageContext';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
    <ThemeModeProvider>
      <Provider store = {store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeModeProvider>
 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
