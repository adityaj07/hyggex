import "./App.css";
import { Routes, Route } from "react-router-dom";
import Flashcard from "./pages/Flashcard";

function App() {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Flashcard />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/contact" element={<Flashcard />} />
        <Route path="/faq" element={<Flashcard />} />
      </Routes>
    </div>
  );
}

export default App;
