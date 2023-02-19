// All react imports
import { useState } from 'react';
// All styles/Bootstrap imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
// All hooks import
import useFetch from './hooks/useFetch';
// All components import
import MovieCard from "./components/MovieCard";

// Api urls
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4e9fca429e4ad82c14ea0eb808059545";

// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=4e9fca429e4ad82c14ea0eb808059545&language=en-US&query";

function App() {
  const { data: movies } = useFetch(API_URL);
  const [query, setQuery] = useState('');

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home" >MovieDb App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
              <Nav
                style={{ maxHeight: "100px" }}
                className="me-auto my-2 my-lg-3"
                navbarScroll
              ></Nav>
              <Form className='d-flex'>
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
      <div className='container'>
        <div className="grid">
          { movies && movies.map(movie => (
              <MovieCard key={movie.id} {...movie} />    
          )) }
        </div>
      </div>
    </>
  );
}

export default App;
