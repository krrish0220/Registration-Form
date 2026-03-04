import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "15px",
    backgroundColor: "#1e293b",
  },
};

export default Navbar;