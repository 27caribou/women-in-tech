import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WhyAttend } from "./pages/WhyAttend";
import { Sponsors } from "./pages/Sponsors";
import { Gallery } from "./pages/Gallery";
import { Tickets } from "./pages/Tickets";
import { ContactUs } from "./pages/ContactUs";
import { NotFound } from "./pages/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
      <>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/why-attend">Why Attend</Link></li>
                  <li><Link to="/sponsors">Sponsors</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/tickets">Tickets</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
              <NavBar/>
          </nav>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/why-attend" element={<WhyAttend />}/>
              <Route path="/sponsors" element={<Sponsors />}/>
              <Route path="/gallery" element={<Gallery />}/>
              <Route path="/tickets" element={<Tickets />}/>
              <Route path="/contact-us" element={<ContactUs />}/>
              <Route path="*" element={<NotFound />}/>
          </Routes>
      </>
  );
}

export default App;
