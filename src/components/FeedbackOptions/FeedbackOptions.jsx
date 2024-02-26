import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

function FeedbackOptions({ options, onLeaveFeedbackOptions }) {
  return (
    <div>
      {options.map((item, index) => {
        return (
          <Button handleClick={() => onLeaveFeedbackOptions(item)}>
            {item}
          </Button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedbackOptions: PropTypes.func.isRequired,
};
