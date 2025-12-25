import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

// Importing your images
import todo from "../Assets/todo.jpeg";
import emp from "../Assets/emp.jpeg";
import shopping from "../Assets/shopping.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* TO-DO LIST PROJECT */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={todo}
              title="Todo-list"
              description="A full-stack task management application. The backend (Server.js) provides robust APIs for CRUD operations, while the React-based frontend (App.js) offers a clean, intuitive UI for users to organize their daily tasks efficiently."
              link="https://github.com/tushardeurmalle/Todo-list.git"
            />
          </Col>

          {/* SHOPPING WEB PROJECT */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={shopping}
              title="Shopping Web"
              description="A modern e-commerce platform designed for a seamless user experience. It features responsive layouts, product catalogs, and interactive shopping elements built using React and styled components."
              link="https://github.com/tushardeurmalle/shopping-web.git"
            />
          </Col>

          {/* EMPLOYEE MANAGEMENT PROJECT */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={emp}
              title="Employee Management"
              description="An enterprise-level management tool for handling employee data. This system allows for efficient tracking of personnel information, department organization, and data persistence using modern web technologies."
              link="https://github.com/tushardeurmalle/Employees-management.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;