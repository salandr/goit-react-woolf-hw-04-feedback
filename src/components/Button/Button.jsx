import PropTypes from 'prop-types';

function Button({ children, handleClick }) {
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
