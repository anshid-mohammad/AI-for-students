import React from 'react';
import './Interactive.css';
import Carousel from 'react-bootstrap/Carousel';
import { FaCheck, FaWhatsapp, FaUsers, FaVideo, FaAward } from 'react-icons/fa'; 
import banner2 from '../../assets/banner2.png';

function Interactive() {
  return (
    <section className="interactiveSection">
      <h2 className="interactiveHeader">Interactive Learning & Community Engagement</h2>
      
      <div className="contentWrapper">
        <div className="imageSection">
          <img src={banner2} alt="Interactive Learning" className="mainImage"/>
        </div>

        <div className="contentSection">
          <Carousel indicators={false} interval={3000}>
            {[
              { icon: <FaWhatsapp />, title: "WhatsApp Group Support", desc: "Stay connected with peers & mentors for instant support." },
              { icon: <FaUsers />, title: "Q&A Sessions & Brainstorming", desc: "Engage in interactive discussions & enhance your learning." },
              { icon: <FaVideo />, title: "Live Sessions", desc: "Join real-time expert-led sessions & interactive classes." },
              { icon: <FaAward />, title: "Certification", desc: "Receive industry-recognized certificates upon completion." }
            ].map((item, index) => (
              <Carousel.Item key={index}>
                <div className="carouselContent">
                  <span className="carouselIcon">{item.icon}</span>
                  <h3>{item.title} <FaCheck className="checkIcon" /></h3>
                  <p>{item.desc}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Interactive;
