import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherProj from '../../Assets/Projects/weatherProj.png'
import Mailchat from '../../Assets/Projects/mail.png'
import expense from '../../Assets/Projects/expense.png'
import ecomm from '../../Assets/Projects/ecomm.png'
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mailchat}
              isBlog={false}
              title="Mail Chat"
              description=" Mailbox client is an application where users can send and receive mail.
              Each user has their own account and users cannot access other users data "
              ghLink="https://github.com/Ritik-122/weather-app-react-main"
              demoLink="https://my-app-2hl8.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Created a web application for tracking personal expenses using React.js. Used React hooks like useState and useEffect to manage state and perform side effects respectively. Incorporated error handling using try/catch blocks and displaying error messages to the user."
              ghLink="https://github.com/luvgameon/Expense_Tracker"
              demoLink="https://expense-tracker-luvgameon.vercel.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="IMDB Clone"
              description="E-commerce website is an application that gives users the option to see
              different products and add them to the cart, manipulating cart data"
              ghLink="https://github.com/luvgameon/E-Commerce"
              demoLink="https://e-commerce-ruby-iota.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherProj}
              isBlog={false}
              title="Weather-App"
              description="Developed a weather app using ReactJS and a Weather API to fetch current weather data. Implemented responsive design to ensure optimal user experience across all devices. Utilized Axios to handle HTTP requests to the API endpoints. "
              ghLink="https://github.com/luvgameon/weather"
              demoLink="https://weather-luvgameon.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
