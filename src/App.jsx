import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import Discover from './components/Discover/Discover';
import Gallery from './components/Gallery/Gallery';
import SchoolInfo from './components/Infos/SchoolInfos';
import SchoolInfoTech from './components/Infos/SchoolInfoTech';
import ContactForm from './components/Contact/ContactForm';
import ScrollToTop from './components/ScrollTopGo';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Discover/Our History" element={<Discover />} />
        <Route path="/Discover/Gallery" element={<Gallery />} />
        <Route path="/Study at P.H.C.H.S/Ordinary Secondary Cycle" element={<SchoolInfo />} />
        <Route path="/Study at P.H.C.H.S/Advance Secondary Cycle" element={<SchoolInfo />} />
        <Route path="/Study at P.H.C.H.S/Technical Section" element={<SchoolInfoTech />} />
        <Route path="/Study at P.H.C.H.S" element={<div><SchoolInfo /><SchoolInfoTech /></div>} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;