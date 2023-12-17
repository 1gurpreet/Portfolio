import "./App.css";

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const email = "gdhillon08@gmail.com";

function App() {
  return (
    <div className="App">
      <NavBar email={email} />
      <div
        data-spy="scroller"
        data-target="#navbar"
        data-offset="0"
        tabindex="0"
      >
        <Intro />
        <About />
        <Projects />
        <Contact email={email} />
      </div>
    </div>
  );
}

export default App;
