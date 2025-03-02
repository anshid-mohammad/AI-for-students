import React, { useState } from 'react'
import styles from "./EnrollNowContent.module.css"
import CTAbutton from '../CTAbutton/CTAbutton'
import EnrollPopup from '../EnrollNowPopup/EnrollPopup';

function EnrollNowContent() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
  return (
    <section className={styles.enrollNowSection}>
   <div className={styles.enrollNow}>
    <h3 className={styles.enroll_text}>📌 Seats are Limited! Enroll Now to Secure Your Spot!</h3>
            <div className={styles.CtaButton}>      <CTAbutton onClick={togglePopup} text='Enroll Now' className={styles.cta_button} />
            </div>
          </div>
          {isPopupOpen && <EnrollPopup toggleModal={togglePopup} />}

    </section>
 
  )
}

export default EnrollNowContent
