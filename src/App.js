import logo from './logo.svg';
import './App.css';
import ionIcon from './component/ionIcon';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
      <Navbar logo="./images/logo-airbnb.svg" />
      <Hero img="./images/hero.svg" />

      <div className="CardContainer">
        <Card img="./images/katies.png" name="Katie Zaferes" star="4.9" country="USA" price="$136" />
        <Card img="./images/august.jpg" name="august" star="4.6" country="SINGAPORE" price="$120" />
        <Card img="./images/sky.jpg" name="Matthieu Pétiard" star="4.8" country="ICE LAND" price="$105" />
      </div>
    </div>
  );
}

export default App;
