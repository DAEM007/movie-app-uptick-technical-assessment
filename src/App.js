// All react imports
// import { useState } from 'react';
// All styles/Bootstrap imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
// All hooks import
import useFetch from './hooks/useFetch';
// All components import
import MovieCard from "./components/MovieCard";

// Api url
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4e9fca429e4ad82c14ea0eb808059545"

function App() {
  const { data: movies } = useFetch(API_URL);
  console.log(movies);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="" >MovieDb App</Navbar.Brand>
          <Navbar.Brand href="">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="navbarScroll">
              <Nav
                style={{ maxHeight: "100px" }}
                className="me-auto my-2 my-lg-3"
                navbarScroll
              >

              <Form className='d-flex'>
                
              </Form>

              </Nav>
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
