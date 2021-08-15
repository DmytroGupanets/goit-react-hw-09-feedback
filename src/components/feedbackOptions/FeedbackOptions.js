import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <div className={styles.controlButtons}>
      {Object.keys(options).map((option) => (
        <button
          className={styles.button}
          key={uuidv4()}
          name={option}
          onClick={onFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.proptype = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default FeedbackOptions;
