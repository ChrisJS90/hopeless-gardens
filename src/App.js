import './App.css';
import { Routes, Route } from "react-router-dom";
import Intro from './pages/Intro';
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
