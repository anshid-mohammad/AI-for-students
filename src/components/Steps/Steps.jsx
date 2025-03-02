import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { FaAngleDoubleDown } from "react-icons/fa"; 
import './Steps.css';  

function Steps() {
  return (
    <section className="stepsSection">
      <div className="heading">
        <h2>AI for Higher Secondary Students: Unlocking the Future with AI</h2>
      </div>
      
      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="0" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 1: Discover AI in Education
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            Begin your journey by understanding the fundamentals of AI and its growing role in education. 
            <ul>
              <li>📖 Introduction to AI and its history</li>
              <li>🎓 AI applications in education</li>
              <li>🔍 Case studies on AI-powered learning</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 2: Explore Essential AI Tools
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            <ul>
              <li>🤖 AI-powered writing assistants</li>
              <li>🎨 AI in design and creativity (Canva, MidJourney)</li>
              <li>📊 AI for research and analysis</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 3: Master Prompt Engineering
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            <ul>
              <li>✍️ How to write effective prompts</li>
              <li>🧠 Understanding AI-generated responses</li>
              <li>🔬 Practical examples and exercises</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 4: Understand AI Ethics & Responsible Use
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            <ul>
              <li>⚖️ Ethical AI principles</li>
              <li>🔍 AI biases and their impact</li>
              <li>📜 Policies and regulations around AI</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 5: Apply Your Knowledge
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            <ul>
              <li>📂 Build a mini AI-powered project</li>
              <li>💡 Collaborate with peers</li>
              <li>📢 Present your findings and improvements</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> Engage & Learn Together
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            <ul>
              <li>💬 Join AI discussions</li>
              <li>🧑‍🏫 Get guidance from mentors</li>
              <li>🎯 Participate in challenges and competitions</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> Is This Course Right for You?
          </Accordion.Header>
          <Accordion.Body className="accordionBody">
            <b>✔ Higher Education Students:</b> Develop AI skills to enhance research and academic work.<br/>
            <b>✔ Postgraduate & PhD Students:</b> Leverage AI tools to improve research efficiency and productivity.<br/>
            <b>✔ Academic Researchers:</b> Utilize AI for data analysis, writing assistance, and advanced research methodologies.<br/>
            <b>✔ AI Enthusiasts:</b> Anyone interested in learning how AI can improve their workflow, creativity, and problem-solving skills.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Steps;
