import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Career, Portofolios, Services, Aboutus } from "./pages";
import { Footer, Navigation } from "./components";
import {Logo, Hero} from "./media"
const App = () => {
  return (
    <div className="App">
      <BrowserRouter id="#top">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portofolios" element={<Portofolios />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
