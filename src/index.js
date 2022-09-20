import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import './index.css';
import App from './App';
import { FavouritesContextProvider } from './store/favourites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavouritesContextProvider>
        <Router>
            <App />
        </Router>
    </FavouritesContextProvider>    
);
