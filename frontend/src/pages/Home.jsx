import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Shield, Clock } from 'lucide-react';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="container hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-subtitle" variants={itemVariants}>
            Building the Future of Energy
          </motion.span>
          <motion.h1 variants={itemVariants}>
            Innovative Construction Services for <span className="text-primary">City Gas Distribution</span>
          </motion.h1>
          <motion.p className="hero-description" variants={itemVariants}>
            Yellow Pipes Engineering provides sustainable and complete construction solutions to the Hydrocarbon Sector, ensuring pan-India natural gas network connectivity.
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="/services" className="btn btn-primary hero-btn">
              Our Services <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-outline hero-btn">
              Who We Are
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats / UVP Highlights */}
      <section className="highlights section">
        <div className="container">
          <motion.div 
            className="highlights-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card highlight-card">
              <Clock className="highlight-icon text-primary" size={40} />
              <h3>On-Time Completion</h3>
              <p>Committed to delivering projects within stipulated targets and schedules without compromising quality.</p>
            </div>
            <div className="glass-card highlight-card">
              <Shield className="highlight-icon text-primary" size={40} />
              <h3>Quality Standards</h3>
              <p>Strict compliance to Health, Safety, Environment (HSE) and client satisfaction metrics.</p>
            </div>
            <div className="glass-card highlight-card">
              <Activity className="highlight-icon text-primary" size={40} />
              <h3>Own Infrastructure</h3>
              <p>Equipped with state-of-the-art machinery and operated by highly skilled manpower.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
