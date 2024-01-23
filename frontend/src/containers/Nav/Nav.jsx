import PropTypes from "prop-types";

const Nav = ({ children }) => {
  Nav.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export default Nav;
