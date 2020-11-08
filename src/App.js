import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import './App.css';
import axios from "axios";

function App() {
  const res = async ()=>{
      const getKey = await axios.get(
      "https://asia-east2-candidateplayground.cloudfunctions.net/key"
    );
    let apiKey = getKey.data.key;

    const getValue = await axios.get(
      "https://asia-east2-candidateplayground.cloudfunctions.net/value",
      {
        headers: {
          Authorization: `${apiKey}`          
        },
      })
      console.log(getValue.data.value)
  }
  res()
  return (
    <div className="App">
      <Header />
      <div class="dashboard">
        <h1>Simple React App served by NGINX and Docker</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
