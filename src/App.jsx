
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductDescriptionPage from './components/ProductDescriptionPage';
import ProductListingPage from './components/ProductListingPage';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<ProductListingPage/>} />
          <Route path="/about/:animeName" element={<ProductDescriptionPage />} />
       </Routes>
    </>
  )
}

export default App
