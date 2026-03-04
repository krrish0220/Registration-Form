import bg from "../assets/bg.jpg";



function Landing() {
  return (
    <div style={styles.container}>
      <h1>                Welcome Students           🎓</h1>
      <footer style={styles.footer}>© 2026 Student Portal</footer>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    paddingTop: "200px",
    color: "white",
  },
  footer: {
    position: "absolute",
    bottom: "10px",
    width: "100%",
  },
};

export default Landing;