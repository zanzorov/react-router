import { Routes, Route, Link } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Featurespage } from "./pages/Featurespage";
import { Contactpage } from "./pages/Contactpage";
import { Notfoundpage } from "./pages/Notfoundpage";

function App() {
  return (
    <div className="wrapper">
      <div className="app">
        <header>
          <div className="logo">
            <Link to="/">Cover</Link>
          </div>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<Featurespage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
