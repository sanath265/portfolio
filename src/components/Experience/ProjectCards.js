import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards({ data }) {
  const { company, role, location, startDate, endDate, description, icon } = data;
  return (
    <Card className="project-card-view">
      <Card.Body>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "1rem"
          }}
        >
          {icon && (
            <img
              src={icon}
              alt={`${company} logo`}
              style={{ width: "80px", height: "80px" }}
            />
          )}
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "80px"
            }}
          >
            <Card.Title style={{ margin: 0 }}>{company}</Card.Title>
            <Card.Subtitle style={{ margin: 0 }}>{role}</Card.Subtitle>
            <Card.Text style={{ margin: 0 }}>
              {startDate} – {endDate}
            </Card.Text>
          </div>
        </div>
        <ul style={{ textAlign: "left", marginTop: "1rem" }}>
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
