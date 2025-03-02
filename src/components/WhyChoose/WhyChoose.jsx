import React from 'react';
import { FaBrain, FaLaptopCode, FaVideo, FaUserGraduate, FaCertificate, FaRupeeSign,FaCheck } from 'react-icons/fa';
import styles from "./WhyChoose.module.css";
import banner3 from "../../assets/banner3.png";

function WhyChoose() {
  return (
    <section className={styles.WhyChoose}>
      <div className={styles.header}>
        <h2>Why Choose This Course?</h2>
      </div>
      
      <div className={styles.leftSection}>
        <img src={banner3} alt="Course Banner" />
      </div>
      
      <div className={styles.rightSection}>
        <ul className={styles.list}>
          <li><FaBrain className={styles.icon} /> Industry-Relevant AI Knowledge <FaCheck className="checkIcon" /></li>
          <li><FaLaptopCode className={styles.icon} /> Hands-On Learning with Assignments  <FaCheck className="checkIcon" /></li>
          <li><FaVideo className={styles.icon} /> Flexible Learning with Recorded & Live Sessions  <FaCheck className="checkIcon" /></li>
          <li><FaUserGraduate className={styles.icon} /> Expert Guidance from Anees Poovathi <FaCheck className="checkIcon" /></li>
          <li><FaCertificate className={styles.icon} /> Certification to Boost Your Profile <FaCheck className="checkIcon" /></li>
          <li><FaRupeeSign className={styles.icon} /> Course Fee: ₹1499 Only <FaCheck className="checkIcon" /></li>
        </ul>
      </div>
    </section>
  );
}

export default WhyChoose;
