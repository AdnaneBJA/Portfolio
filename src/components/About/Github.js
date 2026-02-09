import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  const totalContributions = 330;

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {totalContributions && (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            marginBottom: "15px",
          }}
        >
          <strong className="purple">{totalContributions}</strong> contributions
          in the last year
        </p>
      )}
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://ghchart.rshah.org/c084f5/AdnaneBJA"
          alt="AdnaneBJA's GitHub Contribution Chart"
          style={{
            width: "100%",
            maxWidth: "1100px",
          }}
        />
      </div>
    </Row>
  );
}

export default Github;
