import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HouseContextProvider>
        <Router basename={process.env.PUBLIC_URL}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </HouseContextProvider>
);
