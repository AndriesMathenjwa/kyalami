import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';
import Book from './pages/book/book';
import Music from './pages/music/music';

//gigs imports
import Friday from './pages/friday/friday';
import Saturday from './pages/saturday/saturday';
import Sunday from './pages/sunday/sunday';

//Music imports
import Soul from './pages/soul/soul';
import Amapiano from './pages/amapiano/amapiano';
import Deep from './pages/deep/deep';
import Rnb from './pages/rnb/rnb';
import Afropop from './pages/afropop/afropop';
import Afrotech from './pages/afrotech/afrotech';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/> 
        {/* <Route path="/menu" element={<Menu/>}/> */}
          <Route path="/music" element={<Music/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
        {/* <Route path="/gallery" element={<Gallery/>}/> */}
        <Route path="/book" element={<Book/>}/> 

        {/*Gigs*/}
        <Route path="/friday" element={<Friday/>}/> 
        <Route path="/saturday" element={<Saturday/>}/> 
        <Route path="/sunday" element={<Sunday/>}/> 

         {/*Music*/}
         <Route path="/soul" element={<Soul/>}/> 
         <Route path="/amapiano" element={<Amapiano/>}/> 
         <Route path="/deep" element={<Deep/>}/> 
         <Route path="/rnb" element={<Rnb/>}/> 
         <Route path="/afropop" element={<Afropop/>}/> 
         <Route path="/afrotech" element={<Afrotech/>}/> 


       </Routes>
    </BrowserRouter>
  );
}

export default App;
