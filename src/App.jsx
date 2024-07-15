import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourstory from "./pages/About.jsx";
import Menu from "./pages/menu.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import PlayPage from "./pages/play.jsx";
import Home from "./pages";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/about" element={<Ourstory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/experience" element={<Ourstory />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
