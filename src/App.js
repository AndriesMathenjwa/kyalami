import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//main pages imports
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Music from "./pages/music/music";
import Book from "./pages/book/book";
import Gallery from "./pages/gallery/Gallery";
import Food from "./components/food/Food";

//gigs imports
import Friday from "./pages/friday/friday";
import Saturday from "./pages/saturday/saturday";
import Sunday from "./pages/sunday/sunday";

//Music imports
import Soul from "./pages/soul/soul";
import Amapiano from "./pages/amapiano/amapiano";
import Deep from "./pages/deep/deep";
import Rnb from "./pages/rnb/rnb";
import Afropop from "./pages/afropop/afropop";
import Afrotech from "./pages/afrotech/afrotech";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import FoodPage from "./pages/foods/FoodPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*pages*/}

        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/book" element={<Table/>}/> */}
        <Route path="/book" element={<Book />} />
        <Route path="/food" element={<FoodPage />} />

        {/*Gigs*/}
        <Route path="/friday" element={<Friday />} />
        <Route path="/saturday" element={<Saturday />} />
        <Route path="/sunday" element={<Sunday />} />

        {/*Music*/}
        <Route path="/soul" element={<Soul />} />
        <Route path="/amapiano" element={<Amapiano />} />
        <Route path="/deep" element={<Deep />} />
        <Route path="/rnb" element={<Rnb />} />
        <Route path="/afropop" element={<Afropop />} />
        <Route path="/afrotech" element={<Afrotech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
