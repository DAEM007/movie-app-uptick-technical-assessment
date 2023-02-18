// All react imports
import { useState } from 'react';
// Styles/Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

// Base Image Url
const API_IMG="https://image.tmdb.org/t/p/w500/";

// movie card component
const MovieCards = ({ title, poster_path, vote_average, release_date, overview }) => {
    // states
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className='card text-center mb-3 bg-secondary'>
            <div className="card-body">
                <img className='card-img-top' src={API_IMG + poster_path} alt="movie-pic" />
                <div className="card-body">
                    <button onClick={handleShow} className="btn btn-dark">View more</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img style={{width: '14rem'}} className='card-img-top' src={API_IMG + poster_path} alt="movie-pic" />
                            <h4>ImDb: {vote_average} </h4>
                            <h5>Release Date: {release_date} </h5>
                            <br />
                            <h6>Overview</h6>
                            <p>{ overview }</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default MovieCards;