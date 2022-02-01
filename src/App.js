import './App.css';
import React from "react"
import Footer from "./components/footer.js"
import Info from "./components/info.js"
import Interests from "./components/interests.js"
import About from './components/about.js';

function App() {
  return (
    <div className = "container">
    <Info />
    <About />
    <Interests />
    <Footer />
    </div>
  );
}

export default App;
