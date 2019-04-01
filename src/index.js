import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import './css/common.css'
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    //BrowserRouter 只包含一个元素
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
