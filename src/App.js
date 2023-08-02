import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Map/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
