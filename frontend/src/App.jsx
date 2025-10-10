import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './pages/Home.jsx';
import CareerDetail from './pages/CareerDetail.jsx';
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrera/:id" element={<CareerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;