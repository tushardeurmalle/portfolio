import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Tushar Deurmalle</span>
               I am currently pursuing btech deree from <span className="purple"> Nagpur, India.</span>
            <br />
            
            <br />
    I am currently pursuing a <span className="purple">B.Tech degree in Robotics and Artificial Intelligence</span> from 
    <span className="purple"> Priyadarshini College of Engineering, Nagpur, India.</span>
    <br />
    <br />

    ⚡ I have studied core engineering and software subjects such as 
    <span className="purple"> Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and AI fundamentals</span>.
    <br />
    <br />

    ⚡ Along with my academics, I am currently learning 
    <span className="purple"> Full Stack Web Development (MERN Stack)</span> including MongoDB, Express.js, React.js, and Node.js.
    <br />
    <br />

    ⚡ I am passionate about technology, problem-solving, and building real-world applications using 
    <span className="purple"> AI, Robotics, and modern web technologies</span>.
  </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;