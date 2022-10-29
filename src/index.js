import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './context/ThemeProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ6DtjidKcUhKEXXLp831-Zoz8rBRvhKM",
  authDomain: "react-blog-36119.firebaseapp.com",
  projectId: "react-blog-36119",
  storageBucket: "react-blog-36119.appspot.com",
  messagingSenderId: "680382087945",
  appId: "1:680382087945:web:92d1de06e1e0a69dc8c9d8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<ThemeProvider>
    	<App />
	</ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
