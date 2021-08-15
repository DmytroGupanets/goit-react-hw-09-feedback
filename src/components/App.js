import React, { useState } from "react";

import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import Notification from "./notification/Notification";

import initialValue from "../data/data";

const App = () => {
  const [state, setState] = useState(initialValue);

  const onFeedback = (e) => {
    const name = e.target.name;

    setState((prevState) => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const totalFeedback = Object.values(state).reduce((acc, el) => acc + el, 0);
  const positiveFeedbackPercentage = parseInt(
    (state.good * 100) / totalFeedback
  );

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={initialValue} onFeedback={onFeedback} />
      </Section>
      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            state={state}
            totalFeedback={totalFeedback}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default App;
