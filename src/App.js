
import './App.css';
import Brand from './components/Brand';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Item from './components/Item';
import Join from './components/Join';
import Managers from './components/Managers';
import Newcomer from './components/Newcomer';
import Popular from './components/Popular';


function App() {
  return (
    <div className="App">
      <Hero />
      <Popular />
      <Brand />
      <Newcomer />
      <Managers />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
