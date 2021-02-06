import "./App.css";
// import { Link, animateScroll as scroll } from "react-scroll";
import TheNavbar from "./components/TheNavbar";
import TheHeader from "./components/TheHeader";
import LandingPage from "./pages/LandingPage";
import TheFooter from "./components/TheFooter";
import "./nprogress.css";
function App() {
  return (
    <div id="App" className="App theme-dark">
      <div className="bg-dark-3 text-white">
        <TheNavbar />
        <div className="mb-16">
          <TheHeader />
        </div>
        <LandingPage />

        <TheFooter />
      </div>
      <div></div>
    </div>
  );
}

export default App;
