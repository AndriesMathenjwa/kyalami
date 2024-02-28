import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery';
import Food from './components/food/Food';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/> 
        {/* <Route path="/menu" element={<Menu/>}/> */}
          {/* <Route path="/music" element={<Music/>}/> */}
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
        <Route path="/gallery" element={<Gallery/>}/>
        {/* <Route path="/book" element={<Table/>}/> */}
        <Route path="/food" element={<Food/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
