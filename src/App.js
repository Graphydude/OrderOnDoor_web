import './App.css';
import './Styles/Navbar.css';
import './Styles/HomeHeroSection.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/HomeHeroSection';
// import DataOfCard from './Components/Home/DataOfCard';
// import Card from './Components/Home/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <DataOfCard /> */}
      {/* <Card /> */}
    </div>
  );
}

export default App;
