import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/HomePage/Home";
import Dashboard from "./routes/Dashboard/Dashboard";
import About from "./routes/About/About";
import Helpline from "./routes/Helpline/Helpline";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <div className="flex flex-col h-screen"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* </div> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
