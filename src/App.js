import './App.css';
import { Routes, Route } from "react-router-dom";
import Intro from './pages/Intro';
import Game from './pages/Game'
import Opening from './pages/Opening'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/opening" element={<Opening />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
