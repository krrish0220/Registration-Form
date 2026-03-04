import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import StudentForm from "./components/StudentForm";
import bg from "./assets/bg.jpg";


function App() {
  return (
    <Router>
      <Navbar />
      <div style ={styles.container}>
        {/* <div style={{ width: "100%", textAlign: "center"}}> */}
       {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<StudentForm />} />
      </Routes>
      </div>
      {/* </div> */}
    </Router>
  );
}
const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // display: "flex",
    flexDirection: "columnn",
    // justifyContent: "center",
    // alignItems: "center",
  },
};


export default App;