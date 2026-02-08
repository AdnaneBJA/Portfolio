import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import gunwest from "../../Assets/Projects/gunwest-logo.png";
import ultimateWebsite from "../../Assets/Projects/ultimate-website.png";
import pigGame from "../../Assets/Projects/pig-game.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gunwest}
              isBlog={false}
              title="GunWest"
              description="A full 2D multiplayer game built from scratch in Java during ConUHacks, Quebec's largest hackathon (900+ participants). Won the Beenox-sponsored challenge. Features real-time multiplayer gameplay with custom physics and rendering."
              ghLink="https://github.com/AdnaneBJA/GunWest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ultimateWebsite}
              isBlog={false}
              title="UltimateWebsite"
              description="An arcade website featuring multiple classic games including a fully functional Chess game built from scratch with complete rule enforcement, move validation, and check/checkmate detection, alongside other games like Tetris."
              ghLink="https://github.com/AdnaneBJA/UltimateWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pigGame}
              isBlog={false}
              title="Pig Game"
              description="A two-player dice game built with HTML, CSS, and JavaScript. Players roll dice to accumulate round scores, but rolling a 1 loses the round. Players can hold to bank points. First to 100 wins. Features a clean gradient UI and smooth transitions."
              ghLink="https://github.com/AdnaneBJA/Pig-Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
