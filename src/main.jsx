import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrgi_IcC5H2dz2fZ1bVuHXp9Scu13Rq0g",
  authDomain: "coderhouse-react-72762.firebaseapp.com",
  projectId: "coderhouse-react-72762",
  storageBucket: "coderhouse-react-72762.appspot.com",
  messagingSenderId: "377714712699",
  appId: "1:377714712699:web:052966b7fd6750026a02de"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App x = 'top secret' />
  </React.StrictMode>
)
