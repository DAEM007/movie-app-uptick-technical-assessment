import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import MovieCard from "./components/MovieCard";

const API_URL = process.env.REACT_APP_API_URL;
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query`;

interface Movie {
  id: number;
  overview?: string;
  release_date?: string;
  poster_path?: string;
  title?: string;
  vote_average?: String;
}

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!API_URL) {
      throw Error("API_URL is not defined");
    }
    fetch(API_URL)
      .then((res) => res.json())
      .then((jsonData) => {
        // console.log(jsonData.results);
        setMovies(jsonData.results);
      });
  }, []);

  const searchMovie = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("searching...");
    try {
      const url = `${API_SEARCH}=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">Movie App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              style={{ maxHeight: "100px" }}
              className="me-auto my-2 my-lg-3"
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl
                type="search"
                placeholder="movie search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></FormControl>
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="row">
              {movies.map((movie: Movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        ) : (
          <h2 className="error-search">
            Sorry!!! no movies for this search...
          </h2>
        )}
      </div>
    </>
  );
}

export default App;
