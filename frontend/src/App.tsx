import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contact/>} />
          <Route path='/nosotros' element={<About/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
