import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from './context/context'

import {SpeechProvider} from '@speechly/react-client'

const appId=process.env.REACT_APP_APPID


ReactDOM.render(
 
    <SpeechProvider appId={appId} language='en-US'>
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
