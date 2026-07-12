import { motion } from 'framer-motion';
import { Settings, Wrench, ShieldCheck, Banknote, Users, HardHat, CheckCircle2 } from 'lucide-react';
import './Services.css';

const Services = () => {
  const uvpItems = [
    { icon: <CheckCircle2 />, title: "On Time Completion" },
    { icon: <ShieldCheck />, title: "Quality Standards up to client's satisfaction" },
    { icon: <Banknote />, title: "Strong Financial Support" },
    { icon: <Users />, title: "Good Liasioning with local authorities" },
    { icon: <HardHat />, title: "Own Infrastructure with skilled manpower" },
    { icon: <Users />, title: "Best Man Management Approach" },
    { icon: <ShieldCheck />, title: "Strict compliance to HSE" },
  ];

  return (
    <div className="services-page section container">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="subtitle text-primary">What We Do</span>
        <h1 style={{ marginBottom: '3rem' }}>Our <span className="text-primary">Services</span></h1>
      </motion.div>

      <div className="services-grid">
        <motion.div 
          className="glass-card service-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="service-icon"><Settings size={32} className="text-primary"/></div>
          <h3>GI Pipes & MDPE Laying</h3>
          <p>Installation of GI pipes for Last Mile Connectivity and comprehensive MDPE pipeline laying.</p>
        </motion.div>

        <motion.div 
          className="glass-card service-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="service-icon"><Settings size={32} className="text-primary"/></div>
          <h3>Steel Pipeline</h3>
          <p>Expert laying of Steel pipeline and all associated activities for a robust network.</p>
        </motion.div>

        <motion.div 
          className="glass-card service-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="service-icon"><Wrench size={32} className="text-primary"/></div>
          <h3>Operation & Maintenance</h3>
          <p>O&M services of GI, MDPE, Steel network and CNG stations for various GAs.</p>
        </motion.div>

        <motion.div 
          className="glass-card service-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="service-icon"><Settings size={32} className="text-primary"/></div>
          <h3>Station Construction (CGS/CNG)</h3>
          <p>Construction, Erection, Installation & Commissioning of City Gate Stations & CNG (Online & Daughter Booster) Stations.</p>
        </motion.div>
      </div>

      <motion.div 
        className="uvp-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <span className="subtitle text-primary">Why Choose Us</span>
          <h2>Unique Value Proposition (UVP)</h2>
          <p className="text-muted">The desire to excel with committed efforts and clear vision makes YPE unique and distinctive.</p>
        </div>

        <div className="uvp-grid">
          <div className="uvp-list glass-card">
            <ul>
              {uvpItems.map((item, index) => (
                <li key={index}>
                  <span className="text-primary">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="uvp-details">
            <div className="uvp-detail-item">
              <h3 className="text-primary">We have our own project execution team</h3>
              <p>Unlike big contractors who sub-contract to inexperienced parties leading to slipped schedules, we use our own infrastructure and manpower to ensure commitment and completion in the shortest possible time.</p>
            </div>
            <div className="uvp-detail-item">
              <h3 className="text-primary">Injecting Cash Flow at the right time</h3>
              <p>Cash flow plays a vital role in timely project completion. With strong financial backup, YPE can support the project execution for sufficient periods.</p>
            </div>
            <div className="uvp-detail-item">
              <h3 className="text-primary">Systematic Management and Proper Coordination</h3>
              <p>We ensure proper coordination between Client timelines, Customer requirements, Manpower problems, and local authority compliances with experienced Project Managers and owner involvement.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
