import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Aboutus, Article, Blog, Contactus, Home, Login, Portofolio, Service, Editor, Admin} from "./ui/pages"
import {Footer, Navigation, PortoDetail} from "./ui/organisms"
import { FirebaseProvider } from './utils/FirebaseContext';
import Career from './ui/pages/Career';
import PrivateRoute from './utils/PrivateRoute';
import AdminTemplate from './ui/templates/AdminTemplate';
import AdminPortofolio from './ui/pages/AdminPortofolio';
import AdminPortofolioEditor from './ui/pages/AdminPortofolioEditor';
import AdminArticleEditor from './ui/pages/AdminArticleEditor';
import AdminArticle from './ui/pages/AdminArticle';
import AdminEditor from './ui/pages/AdminEditor';

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
        <Route element={<PrivateRoute />} >
          <Route path="/admin/portofolio" element={<AdminTemplate><AdminPortofolio /></AdminTemplate>}></Route>
          <Route path="/admin/add-portofolio" element={<AdminTemplate><AdminPortofolioEditor /></AdminTemplate>}></Route>
          <Route path="/admin/edit-portofolio/:id" element={<AdminTemplate><AdminPortofolioEditor /></AdminTemplate>}></Route>
          <Route path="/admin/add-article" element={<AdminTemplate><AdminArticleEditor /></AdminTemplate>}></Route>
          <Route path="/admin/edit-article/:id" element={<AdminTemplate><AdminArticleEditor /></AdminTemplate>}></Route>
          <Route path="/admin/article" element={<AdminTemplate><AdminArticle /></AdminTemplate>}></Route>
          <Route path="/editor" element={<AdminTemplate><Editor /></AdminTemplate>}></Route>
          <Route path="/admin" element={<AdminTemplate><Admin /></AdminTemplate>}></Route>
          <Route path="/editor/:id" element={<AdminTemplate><AdminEditor/></AdminTemplate>}></Route>
        </Route>
      </Routes>
      <Footer />
  </BrowserRouter>
  </FirebaseProvider>
  );
}

export default App;
