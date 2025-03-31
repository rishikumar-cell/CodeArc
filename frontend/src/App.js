import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");
  useEffect(()=>{
    axios.get('http://localhost:8000/api/')
    .then(response => setMessage(response.data.message))
    .catch(error => console.error('Error fetching data:', error));
  },[]);
  return (
    <div className="App">
        <h1>{message}</h1>
        <p>
          This is a React frontend connected to a Django backend.
        </p>
    </div>
  );
}

export default App;
