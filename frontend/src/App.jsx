import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Equipment from './pages/Equipment';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <AnimatePresence>
          {showSplash && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(18, 18, 18, 0.85)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.9)',
                  padding: '20px 40px',
                  borderRadius: '50px',
                  border: '1px solid rgba(244, 196, 48, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(244, 196, 48, 0.2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h1
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    textAlign: 'center',
                    margin: 0,
                    letterSpacing: '0.5px'
                  }}
                >
                  Welcome to Yellow Pipes Engineering Page
                </h1>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/equipment" element={<Equipment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
