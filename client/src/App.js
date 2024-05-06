import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import OurApproach from "./pages/OurApproach";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import MemberLogin from "./components/MemberLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Offerings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blog1" element={<Blog1 />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/blog3" element={<Blog3 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/team" element={<Team />} />
        <Route path="/member-login" element={<MemberLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
