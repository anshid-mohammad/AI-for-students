import React from "react";
import styles from "./CTAbutton.module.css";

const CTAbutton = ({ text, onClick }) => {
  return (
    <button className={styles.ctaButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAbutton;
