import React from 'react';
import Row from './components/Row';
import './App.css';
import requests from './request';

function App() {
  // console.log(`${process.env.REACT_APP_API_KEY}`)
  return (
    <div className="App">
      <h1>Welcome To Netflix: </h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNexflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
