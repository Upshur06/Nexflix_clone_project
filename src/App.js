import React from 'react';
import Row from './components/Row';
import './App.css';
import requests from './request';

function App() {
  // console.log(`${process.env.REACT_APP_API_KEY}`)
  return (
    <div className="App">
      <h1>Welcome To Netflix: </h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNexflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
