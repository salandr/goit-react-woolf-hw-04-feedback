import PropTypes from 'prop-types';

function Button({ children, handleClick }) {
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
