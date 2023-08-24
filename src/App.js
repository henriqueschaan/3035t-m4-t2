import React, { useState } from 'react';
import movieData from './filmes.json';
import MovieTable from './components/MovieTable';
import Search from './components/Search';

function App() {
  const [movies] = useState(movieData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie => 
    movie.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Search onChange={setSearchTerm} />
      <MovieTable movies={filteredMovies} />
    </div>
  );
}

export default App;