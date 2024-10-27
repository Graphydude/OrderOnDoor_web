import './App.css';
import './Styles/Navbar.css';
import './Styles/HomeHeroSection.css';
import "./Styles/NewlyLaunched.css"
import "./Styles/InfoOfBooksInPakistan.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home/HomeHeroSection';
import NewLaunched from './Components/Home/NewlyLuanched';
import InfoOfBooksInPakistan from './Components/Home/InfoOfBooksInPakistan';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <NewLaunched /> */}
      <InfoOfBooksInPakistan />
    </div>
  );
}

export default App;
