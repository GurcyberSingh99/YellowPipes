import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const workOrders = [
    {
      client: "Haryana City Gas",
      description: "ARC for providing connections to Domestic, Industrial and Commercial customers including Service Line, MDPE Laying GI/CU Installation of PNG connections in high rise, Installation of MRS for Project & O&M activities in Gurugram GA.",
      value: "INR One Crore Only",
      date: "02.09.2024"
    },
    {
      client: "Haryana City Gas",
      description: "ARC for providing connections to Domestic, Industrial and Commercial customers including Service Line, MDPE Laying GI/CU Installation of PNG connections in high rise, Installation of MRS for Project & O&M activities in Gurugram GA.",
      value: "INR Fifty Lakh",
      date: "22.03.2024"
    },
    {
      client: "MT Enterprises",
      description: "MDPE Laying and Industrial & Commercial Connections work for Gurgaon.",
      value: "INR 52 Lakh",
      date: "27.08.2022"
    },
    {
      client: "IGL Kaithal (via Cordant Engineerings India Ltd)",
      description: "ARC contract of 2 years for MDPE Laying and GI connection at IGL Kaithal.",
      value: "INR 8 Crore",
      date: "06.09.2023"
    }
  ];

  return (
    <div className="experience-page section container">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="subtitle text-primary">Our Track Record</span>
        <h1 style={{ marginBottom: '3rem' }}>Work Order & <span className="text-primary">Experience</span></h1>
      </motion.div>

      <div className="stats-container glass-card">
        <div className="stat-item">
          <TrendingUp className="text-primary" size={32} />
          <div className="stat-info">
            <h3>INR 150 Lakh</h3>
            <p>Executed Value (approx.)</p>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <Briefcase className="text-primary" size={32} />
          <div className="stat-info">
            <h3>2nd Year</h3>
            <p>Rapid Growth Turn Over</p>
          </div>
        </div>
      </div>

      <div className="experience-grid">
        <motion.div 
          className="achievements glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--white)' }}>Key Achievements</h2>
          <ul className="achievement-list">
            <li>
              <MapPin className="text-primary" size={24} />
              <span>Approx. 40 km of MDPE network of sizes 125, 63 & 32mm at Gurgaon and Manesar.</span>
            </li>
            <li>
              <MapPin className="text-primary" size={24} />
              <span>Provided Industrial and Commercial connection to more than 150 units.</span>
            </li>
            <li>
              <MapPin className="text-primary" size={24} />
              <span>20 KM of MDPE pipe at Kaithal IGL site.</span>
            </li>
            <li>
              <MapPin className="text-primary" size={24} />
              <span>400 GI connections at Kaithal IGL site.</span>
            </li>
          </ul>
        </motion.div>

        <div className="work-orders">
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--white)' }}>Work Order Details</h2>
          <div className="timeline">
            {workOrders.map((order, index) => (
              <motion.div 
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <h3>{order.client}</h3>
                    <span className="badge">{order.value}</span>
                  </div>
                  <p className="timeline-desc">{order.description}</p>
                  <div className="timeline-meta">
                    <Calendar size={16} />
                    <span>{order.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
