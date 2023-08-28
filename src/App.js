// All react imports
import { useState, useEffect } from 'react';
// All styles/Bootstrap imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
// All components import
import MovieCard from "./components/MovieCard";

// Api urls
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4e9fca429e4ad82c14ea0eb808059545";

const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=4e9fca429e4ad82c14ea0eb808059545&language=en-US&query";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
        .then(res => res.json())
        .then(jsonData => {
            // console.log(jsonData.results);
            setMovies(jsonData.results);
        })
    
  }, [])

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log('searching...');
    try {
      const url = `${API_SEARCH}=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home" >Movie App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
              <Nav
                style={{ maxHeight: "100px" }}
                className="me-auto my-2 my-lg-3"
                navbarScroll
              ></Nav>
              <Form className='d-flex' onSubmit={searchMovie}>
                <FormControl
                  type='search'
                  placeholder='movie search'
                  className='me-2'
                  aria-label='search'
                  name='query'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></FormControl>
                <Button variant="secondary" type='submit'>Search</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        { movies.length > 0 ? (
          <div className='container'>
            <div className="grid">
              { movies.map(movie => (
                <MovieCard key={movie.id} {...movie} />    
              )) }
            </div>
          </div>
        ) : (
          <h2 className='error-search'>Sorry!!! no movies for this search...</h2>
        ) }
      </div>

    </>
  );
}

export default App;
