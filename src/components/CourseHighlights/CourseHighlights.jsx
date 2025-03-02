import React, { useState } from 'react';
import styles from "./CourseHighlights.module.css";
import { FaCheckCircle, FaVideo, FaChalkboardTeacher, FaRupeeSign } from 'react-icons/fa';
import CTAbutton from '../CTAbutton/CTAbutton';
import EnrollPopup from '../EnrollNowPopup/EnrollPopup';

function CourseHighlights() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className={styles.WhoShouldEnroll_sec}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Course Highlights</h2>


        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.feature_icon}>
              <FaCheckCircle />
            </div>
            <h3 className={styles.feature_title}>✔ 1-Month Certification Course</h3>
          </div>

          <div className={styles.feature}>
            <div className={styles.feature_icon}>
              <FaVideo />
            </div>
            <h3 className={styles.feature_title}>✔ Recorded Classes</h3>
          </div>

          <div className={styles.feature}>
            <div className={styles.feature_icon}>
              <FaCheckCircle />
            </div>
            <h3 className={styles.feature_title}>✔ Live Sessions</h3>
          </div>

          <div className={styles.feature}>
            <div className={styles.feature_icon}>
              <FaChalkboardTeacher />
            </div>
            <h3 className={styles.feature_title}>✔ Expert Faculty: Anees Poovathi</h3>
          </div>

          <div className={styles.feature}>
            <div className={styles.feature_icon}>
              <FaRupeeSign />
            </div>
            <h3 className={styles.feature_title}>✔ Affordable Course Fee: Only 1499/-</h3>
          </div>
        </div>
<div className={styles.enrollNow}>
<h3 className={styles.enroll_text}>Enroll Now & Start Your AI Journey!</h3>
        <div className={styles.CtaButton}>      <CTAbutton onClick={togglePopup} text='Enroll Now' className={styles.cta_button} />
        </div>
      </div>
</div>
{isPopupOpen && <EnrollPopup toggleModal={togglePopup} />}
 
    </section>
  );
}

export default CourseHighlights;
