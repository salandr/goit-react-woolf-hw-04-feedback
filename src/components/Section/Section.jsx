import PropTypes from 'prop-types';

function Section({ children, title }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
