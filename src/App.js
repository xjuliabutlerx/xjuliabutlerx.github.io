//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Exp from "./routes/Exp";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
//import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Exp />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
