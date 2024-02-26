import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeedback} %</li>
    </ul>
  );
}

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
