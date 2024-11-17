import './App.css';
import './Styles/Navbar.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/HomeHeroSection';
import NewLaunched from './Components/Home/NewlyLuanched';
import InfoOfBooksInPakistan from './Components/Home/InfoOfBooksInPakistan';
import Footer from './Components/Home/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <NewLaunched />
      <InfoOfBooksInPakistan />
      <Footer />
    </div>
  );
}

export default App;
