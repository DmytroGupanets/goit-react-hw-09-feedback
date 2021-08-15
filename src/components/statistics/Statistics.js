import React from "react";

import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ state, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <ul className={styles.statisticsList}>
      <li>
        <p className={styles.option}>
          good : <span className={styles.value}>{state.good}</span>
        </p>
      </li>
      <li>
        <p className={styles.option}>
          neutral : <span className={styles.value}>{state.neutral}</span>
        </p>
      </li>
      <li>
        <p className={styles.option}>
          bad : <span className={styles.value}>{state.bad}</span>
        </p>
      </li>
      <li>
        <p className={styles.option}>
          total : <span className={styles.value}>{totalFeedback}</span>
        </p>
      </li>
      <li>
        <p className={styles.option}>
          positive feedback :
          <span className={styles.value}>{positiveFeedbackPercentage}</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number.isRequired),
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
