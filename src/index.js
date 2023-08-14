import React from 'react';
//import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './Components/App';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, document.getElementById('root'))