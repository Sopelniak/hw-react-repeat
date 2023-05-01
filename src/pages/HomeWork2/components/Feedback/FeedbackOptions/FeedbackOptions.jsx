export const FeedbackOptions = ({ options, leaveFeedback }) => {
  const onClick = (e) => {
    leaveFeedback(e.target.dataset.param);
  };

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          data-param={option}
          onClick={onClick}
        >
          {capitalize(option)}
        </button>
      ))}
    </>
  );
};
