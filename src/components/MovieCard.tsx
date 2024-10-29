import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import altMoviePic from "../assets/images/pexels-cliford-mervil-2469122.jpg";
interface Movie {
  id: number;
  overview?: string;
  release_date?: string;
  poster_path?: string;
  title?: string;
  vote_average?: String;
}

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCards = ({
  poster_path,
  title,
  vote_average,
  release_date,
  overview,
}: Movie) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const imageUrl = poster_path !== null ? API_IMG + poster_path : altMoviePic;

  return (
    <div className="col-12 col-md-6 col-lg-4 card text-center mb-3 bg-secondary">
      <div className="card-body">
        <img className="card-img-top" src={imageUrl} alt="movie-pic" />
        <div className="card-body">
          <button onClick={handleShow} className="btn btn-dark">
            View more
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                style={{ width: "14rem", objectFit: "cover" }}
                className="card-img-top"
                src={imageUrl}
                alt="movie-pic"
              />
              <h4>ImDb: {vote_average} </h4>
              <h5>Release Date: {release_date} </h5>
              <br />
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
