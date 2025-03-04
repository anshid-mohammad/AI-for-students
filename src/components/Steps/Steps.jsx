import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { FaAngleDoubleDown } from "react-icons/fa"; 
import './Steps.css';  

function Steps() {
  return (
    <section className="stepsSection">
      <div className="heading">
        <h2>AI for Higher Secondary Students: Unlocking the Future with AI</h2>
      </div>
      
      <div className="accordions">
        <div className="accordionItem">
          <div className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 1: Discover AI in Education
          </div>
          <div className="accordionBody">
            Begin your journey by understanding the fundamentals of AI and its growing role in education. 
            <ul>
              <li>📖 Introduction to AI and its history</li>
              <li>🎓 AI applications in education</li>
              <li>🔍 Case studies on AI-powered learning</li>
            </ul>
          </div>
        </div>

        <div className="accordionItem">
          <div className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 2: Explore Essential AI Tools
          </div>
          <div className="accordionBody">
            <ul>
              <li>🤖 AI-powered writing assistants</li>
              <li>🎨 AI in design and creativity (Canva, MidJourney)</li>
              <li>📊 AI for research and analysis</li>
            </ul>
          </div>
        </div>

        <div className="accordionItem">
          <div className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 3: Master Prompt Engineering
          </div>
          <div className="accordionBody">
            <ul>
              <li>✍️ How to write effective prompts</li>
              <li>🧠 Understanding AI-generated responses</li>
              <li>🔬 Practical examples and exercises</li>
            </ul>
          </div>
        </div>

        <div className="accordionItem">
          <div className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 4: Understand AI Ethics & Responsible Use
          </div>
          <div className="accordionBody">
            <ul>
              <li>⚖️ Ethical AI principles</li>
              <li>🔍 AI biases and their impact</li>
              <li>📜 Policies and regulations around AI</li>
            </ul>
          </div>
        </div>

        <div className="accordionItem">
          <div className="accordionHeader">
            <FaAngleDoubleDown className="icons"/> 5: Apply Your Knowledge
          </div>
          <div className="accordionBody">
            <ul>
              <li>📂 Build a mini AI-powered project</li>
              <li>💡 Collaborate with peers</li>
              <li>📢 Present your findings and improvements</li>
            </ul>
          </div>
        </div>

        <div className="accordionItem">
          <div className="accordionHeader">
            <FaAngleDoubleDown className="icons"/>6: Engage & Learn Together
          </div>
          <div className="accordionBody">
            <ul>
              <li>💬 Join AI discussions</li>
              <li>🧑‍🏫 Get guidance from mentors</li>
              <li>🎯 Participate in challenges and competitions</li>
            </ul>
          </div>
        </div>

        <div className="accordionItemLast">
          <div className="accordionHeaderLast">
            <FaAngleDoubleDown className="icons"/>7: Is This Course Right for You?
          </div>
          <div className="accordionBodyLast">
            <b>✔ Higher Education Students:</b> Develop AI skills to enhance research and academic work.<br/>
            <b>✔ Postgraduate & PhD Students:</b> Leverage AI tools to improve research efficiency and productivity.<br/>
            <b>✔ Academic Researchers:</b> Utilize AI for data analysis, writing assistance, and advanced research methodologies.<br/>
            <b>✔ AI Enthusiasts:</b> Anyone interested in learning how AI can improve their workflow, creativity, and problem-solving skills.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
