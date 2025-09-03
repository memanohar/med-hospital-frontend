// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import Beds from './pages/Beds';
// import Appointments from './pages/Appointments';
// import Medicines from './pages/Medicines';
// import About from './pages/About';
// import Footer from './components/Footer';
// import { HospitalProvider } from './context/HospitalContext';


// const App = () => {
// return (
// <BrowserRouter>
// <HospitalProvider>
// <NavBar />
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/services" element={<Services />} />
// <Route path="/beds" element={<Beds />} />
// <Route path="/appointments" element={<Appointments />} />
// <Route path="/medicines" element={<Medicines />} />
// <Route path="/about" element={<About />} />
// </Routes>
// <Footer />
// </HospitalProvider>
// </BrowserRouter>
// );
// };


// export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Beds from './pages/Beds';
import Appointments from './pages/Appointments';
import Medicines from './pages/Medicines';
import About from './pages/About';
import Footer from './components/Footer';
import { HospitalProvider } from './context/HospitalContext';

const App = () => {
  return (
    <BrowserRouter>
      <HospitalProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="container"><h2>404 - Page Not Found</h2></div>} />
        </Routes>
        <Footer />
      </HospitalProvider>
    </BrowserRouter>
  );
};

export default App;