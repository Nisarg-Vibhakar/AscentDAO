import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyCzlZqCc3Lfszr1FGjutAuy80rtFleCMq0",
  authDomain: "ascentdao.firebaseapp.com",
  projectId: "ascentdao",
  storageBucket: "ascentdao.appspot.com",
  messagingSenderId: "360120325404",
  appId: "1:360120325404:web:47ea06c7e9cc5606c2d6d9",
  measurementId: "G-308DFV5YD9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);