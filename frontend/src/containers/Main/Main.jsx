import PropTypes from "prop-types";

const Main = ({ children }) => (
  <main data-testid="home-testid">{children}</main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
