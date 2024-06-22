import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ContactUS from './components/ContactUS';
import ContactPL from './components/ContactPL';
import ContactDE from './components/ContactDE';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />}>
          <Route path="us" element={<ContactUS />} />
          <Route path="pl" element={<ContactPL />} />
          <Route path="de" element={<ContactDE />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;