import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function MovieModal({ thisMovie, setThisMovie }) {
  const handleClose = () => {
    return setThisMovie(null);
  };

  return (
    <>
      <Modal show={Boolean(thisMovie)} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {thisMovie.title + "  "}({thisMovie.release_date})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/w500/${thisMovie.poster_path}`}
            alt=""
          />
          <p>{thisMovie.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Watch
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieModal;
