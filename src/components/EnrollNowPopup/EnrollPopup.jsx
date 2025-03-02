import React, { useState } from "react";
import styles from "./EnrollPopup.module.css";

const EnrollPopup = ({ toggleModal }) => {
  const [pincode, setPincode] = useState("");

  const handlePincodeChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 6) {
      setPincode(inputValue);
    }
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupBox}>
        <div className={styles.imageContainer}>
          <img
            src="https://i.pinimg.com/736x/30/42/0d/30420dcf58cc0eeebc857ede5045efb4.jpg"
            alt="AI Course"
            className={styles.modalImage}
          />
          <button className={styles.closeBtn} onClick={toggleModal}>
            &times;
          </button>
        </div>

        <div className={styles.inputContainer}>
          <form>
            <div className="mb-1">
              <input
                type="number"
                className="form-control"
                id="pincode"
                name="pincode"
                placeholder="Enter your Pincode"
                value={pincode}
                onChange={handlePincodeChange}
              />
            </div>
            <div className="form-check text-start mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="checkRadio"
                id="checkRadio"
                value="option1"
              />
              <label className="form-check-label" htmlFor="checkRadio">
                I do accept the <a href="#">Terms & Conditions</a>
              </label>
            </div>
            <button type="submit" className={styles.submitBtn}>
              PROCEED TO PAY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollPopup;
