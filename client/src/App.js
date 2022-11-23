import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Armory from './pages/Armory/Armory';
import Forge from './pages/Forge/Forge';
import Community from './pages/Community/Community';



function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/armory" element={<Armory />} />
        <Route path="/forge" element={<Forge />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
