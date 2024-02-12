import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/> 
        {/* <Route path="/menu" element={<Menu/>}/> */}
          {/* <Route path="/music" element={<Music/>}/> */}
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
        {/* <Route path="/gallery" element={<Gallery/>}/> */}
        {/* <Route path="/book" element={<Table/>}/> */}
       </Routes>
    </BrowserRouter>
  );
}

export default App;
