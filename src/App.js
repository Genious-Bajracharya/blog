import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import Blogpost from "./page/blogPost";
import Contact from "./page/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogpost" element={<Blogpost />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
