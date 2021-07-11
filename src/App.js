import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';

function App() {
  return (
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
  );
}

export default App;
