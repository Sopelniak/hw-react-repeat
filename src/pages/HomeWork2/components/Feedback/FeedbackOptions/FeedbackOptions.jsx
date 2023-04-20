export const FeedbackOptions = ({ leaveFeedback }) => {
  const onClick = (e) => {
    leaveFeedback(e.target.dataset.param);
  };

  return (
    <>
      <button type="button" data-param="good" onClick={onClick}>
        Good
      </button>
      <button type="button" data-param="neutral" onClick={onClick}>
        Neutral
      </button>
      <button type="button" data-param="bad" onClick={onClick}>
        Bad
      </button>
    </>
  );
};
