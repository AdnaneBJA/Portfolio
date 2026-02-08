import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Computer Science student at Concordia University with a
              passion for building robust and scalable software. I enjoy diving
              deep into systems and crafting solutions that bridge theory and
              practice.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, C/C++, and JavaScript{" "}
                </b>
              </i>
              — and I love working across the full stack.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Distributed Systems, Enterprise Applications with Spring Boot,{" "}
                </b>
              </i>
              and exploring the intersection of
              <i>
                <b className="purple"> Embedded Systems and Machine Learning</b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I love building backend services with
              <b className="purple"> Spring Boot </b> and experimenting with
              <i>
                <b className="purple"> embedded platforms</b> and{" "}
                <b className="purple">ML models</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
