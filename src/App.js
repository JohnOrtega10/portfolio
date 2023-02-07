import "./App.css";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutme/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Cursor from "./components/cursor/Cursor";
import { BrowserView } from "react-device-detect";

function App() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
      <BrowserView>
        <Cursor />
      </BrowserView>
    </div>
  );
}

export default App;
