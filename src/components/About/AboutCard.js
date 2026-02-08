import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I'm <span className="purple">Adnane Bejja</span>, a{" "}
            <span className="purple">Software Engineering</span> student at{" "}
            <span className="purple">Concordia University</span> based in
            Montreal, Canada.
            <br />
            <br />
            I'm proficient in{" "}
            <b className="purple">Java, Python, C/C++, and JavaScript</b> and
            love working across the full stack — from building enterprise
            backend services with <b className="purple">Spring Boot</b> to
            crafting responsive front-end experiences.
            <br />
            <br />
            Outside of coding, here's what keeps me busy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building projects with Spring Boot
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Embedded Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Machine Learning
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
