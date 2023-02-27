import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Porfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Porfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
