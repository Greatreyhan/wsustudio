import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Aboutus, Article, Blog, Contactus, Home, Login, Portofolio, Service} from "./ui/pages"
import {Footer, Navigation, PortoDetail} from "./ui/organisms"
import { FirebaseProvider } from './utils/FirebaseContext';
import Career from './ui/pages/Career';

function App() {

  return (
    <FirebaseProvider>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/portofolio" element={<Portofolio />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portofolio/:id" element={<PortoDetail />}></Route>
        <Route path="/review" element={<Contactus />}></Route>
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
  </BrowserRouter>
  </FirebaseProvider>
  );
}

export default App;
