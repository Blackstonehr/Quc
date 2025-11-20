import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Installation from './pages/Installation';
import DataCertifications from './pages/DataCertifications';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/data-certifications" element={<DataCertifications />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
