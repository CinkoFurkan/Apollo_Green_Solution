import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { NewsPage } from './components/NewsPage';
import { ProductsPage } from './components/ProductsPage';
import { SectorsPage } from './components/SectorsPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
import ScrollToTop from './ScrollToTop'; 



export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
