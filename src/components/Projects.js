import React from "react";
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import toDoGif from '../images/to-do-cropped.gif';
import photoGalleryGif from '../images/gallery-crop.gif';
import trackItGif from '../images/track-it-crop.gif';
import gitstatsGif from '../images/GitStatsDemo1.gif';
import conwaysGame from '../images/Conways_Game.gif';

const Project = () => {
  return (
    <div>
      <Header />
      <div className="profile-pic-container">
        <img src="http://placehold.jp/150x150.png" alt="placeholdery"/>
      </div>
      <h1>My Projects</h1>
      <Container fluid>
        <Row>
            <Col sm={8}>
              <h2>Conway's Game of Life</h2>
              <p>This app allows you to keep track of your tasks. It was made using React for the front-end and PostgreSQL for the back-end.</p>
              <a href="https://github.com/hebergonza719/CS-Build-Week-One/tree/main/game-of-life"><Button variant="outline-secondary">Github Front-end</Button></a>
              <a href="https://game-of-life-javascript.herokuapp.com/r"><Button variant="outline-secondary">Visit App</Button></a>
            </Col>
            <Col sm={4}>
              <img className="to-do-img" src={conwaysGame} alt="Gallery app gif displaying functionality"/>
            </Col>
          </Row>
        </Container>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <img className="to-do-img" src={toDoGif} alt="to-do-list gif displaying functionality"/>
          </Col>
          <Col sm={8}>
            <h2>To-do App</h2>
            <p>This app allows you to keep track of your tasks. It was made using React for the front-end and PostgreSQL for the back-end.</p>
            <a href="https://github.com/hebergonza719/to-do-list"><Button variant="outline-secondary">Github Front-end</Button></a>
            <a href="https://github.com/hebergonza719/to-do-list-backend"><Button variant="outline-secondary">Github Back-end</Button></a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
            <Col sm={8}>
              <h2>Photo Gallery</h2>
              <p>This app allows you to keep track of your tasks. It was made using React for the front-end and PostgreSQL for the back-end.</p>
              <a href="https://github.com/hebergonza719/photo-gallery"><Button variant="outline-secondary">Github Front-end</Button></a>
              <a href="https://github.com/hebergonza719/photo-gallery/tree/main/server"><Button variant="outline-secondary">Github Back-end</Button></a>
            </Col>
            <Col sm={4}>
              <img className="to-do-img" src={photoGalleryGif} alt="Gallery app gif displaying functionality"/>
            </Col>
          </Row>
        </Container>
        <Container fluid>
        <Row>
          <Col sm={4}>
            <img className="to-do-img" src={trackItGif} alt="Exercise tracker app gif displaying functionality"/>
          </Col>
          <Col sm={8}>
            <h2>Track it</h2>
            <p>This app allows you to keep track of your tasks. It was made using React for the front-end and PostgreSQL for the back-end.</p>
            <a href="https://github.com/hebergonza719/exercise_tracker_front_end"><Button variant="outline-secondary">Github Front-end</Button></a>
            <a href="https://github.com/hebergonza719/exercise_tracker_backend"><Button variant="outline-secondary">Github Back-end</Button></a>
            <a href="https://track-it-exercise-app.herokuapp.com/"><Button variant="outline-secondary">Visit App</Button></a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
            <Col sm={8}>
              <h2>Gitstats</h2>
              <p>This app allows you to keep track of your tasks. It was made using React for the front-end and PostgreSQL for the back-end.</p>
              <a href="https://github.com/Lambda-School-Labs/github-commit-analysis-fe"><Button variant="outline-secondary">Github Front-end</Button></a>
              <a href="https://github.com/Lambda-School-Labs/github-commit-analysis-be"><Button variant="outline-secondary">Github Back-end</Button></a>
            </Col>
            <Col sm={4}>
              <img className="to-do-img" src={gitstatsGif} alt="Gitstats gif displaying functionality"/>
            </Col>
          </Row>
        </Container>
    </div>
  )
};

export default Project;