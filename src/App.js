import "./App.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
