import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import EnrollPopup from "../EnrollNowPopup/EnrollPopup";
import "./Faq.css"
const Faqs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const faqData = [
    {
      id: 1,
      question: "What is the duration of the course?",
      answer: "The course spans 1 month with self-paced videos and live workshops.",
    },
    {
      id: 2,
      question: "Do I need prior knowledge of AI?",
      answer: "Absolutely not! This course is designed for beginners.",
    },
    {
      id: 3,
      question: "Will I get a certificate?",
      answer: "Yes, a certification will be provided upon successful completion.",
    },
    {
      id: 4,
      question: "Can I complete the course at my own pace?",
      answer:
        "Yes! You can watch pre-recorded sessions anytime. The only fixed session is the live Q&A at the end of Week 4.",
    },
    {
      id: 5,
      question: "What if I miss the live Q&A session?",
      answer: "A recording will be available for you to watch later.",
    },
  ];

  return (
    <section className="faq-section">
      <Container className="faq-content">
        <div className="faq-header">
          <h2 className="faq-title">FAQs :</h2>
          <h4 className="faq-subtitle">Got Questions? We’ve Got Answers!</h4>
        </div>

        <Accordion defaultActiveKey="">
          {faqData.map((faq, index) => (
            <Accordion.Item key={faq.id} eventKey={index.toString()} className="faq-item">
              <Accordion.Header className="faq-question">{faq.question}</Accordion.Header>
              <Accordion.Body className="faq-answer">{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
      {isPopupOpen && <EnrollPopup toggleModal={togglePopup} />}
    </section>
  );
};

export default Faqs;
