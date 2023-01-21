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
          <NavBar/>
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
