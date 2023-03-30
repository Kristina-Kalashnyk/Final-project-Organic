import './App.css';
import HomePage from './page/HomePage';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*
function App() {
  return (
    <div className="App">
    <HomePage/>
    </div>
  );
}

export default App;*/
export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  );
  }