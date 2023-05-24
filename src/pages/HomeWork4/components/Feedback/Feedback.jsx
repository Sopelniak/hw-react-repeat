import { Component, useState } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "../../../../components/Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const Feedback_4 = () => {
  const [feedback, setFeedback] = useState(INITIAL_STATE);

  const leaveFeedback = (param) => {
    setFeedback((prevFeedback) => {
      return {
        ...prevFeedback,
        [param]: prevFeedback[param] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  const { good, neutral, bad } = feedback;
  const isFeedback = !!countTotalFeedback();
  return (
    <>
      <h1>Віджет відгуків кафе "Expresso"</h1>

      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          leaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {isFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
