import './App.css';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import CartPage from './page/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/Cart" element={<CartPage />} />
  <Route path="/404" element={<NotFoundPage />} />
  </Routes>
  </BrowserRouter>
  );
  }