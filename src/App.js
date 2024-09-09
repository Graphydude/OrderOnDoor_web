import './App.css';
import './Styles/Navbar.css';
import './Styles/HomeHeroSection.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/HomeHeroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
