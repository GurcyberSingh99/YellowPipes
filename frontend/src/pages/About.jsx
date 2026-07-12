import { motion } from 'framer-motion';
import { Target, Eye, Gem } from 'lucide-react';
import './About.css';

const About = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-page section container">
      <motion.div
        className="about-header text-center"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <span className="subtitle text-primary">About Us</span>
        <h1>Welcome to <span className="text-primary">Yellow Pipes Engineering</span></h1>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="glass-card main-story">
          <p>
            <strong>YELLOW PIPES ENGINEERING (YPE)</strong> was incorporated on 26th February 2022 with the aim of providing innovative and sustainable construction services to the Hydrocarbon Sector, specifically to the City Gas Distribution (CGD) sector.
          </p>
          <p>
            With the ever-growing demand of experienced and spirited contractors, and the Government of India (GOI) thrust over the last few years in developing a pan-India Natural Gas Network up to Last Mile Connectivity, Yellow Pipes Engineering intends to venture into the construction arena to provide a single-stop solution for all CGD construction activities under one roof.
          </p>
          <p>
            At YPE, we are in the process of developing the company with a culture of persistence and openness while providing services to esteemed customers. Our team continuously exhibits desired behavior and values that include impartiality, independence, ethical practice, customer-centricity, and endorsement of a safe working environment.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="founder-section mt-5 mb-5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="section-title text-center">Meet Our <span className="text-primary">Managing Director</span></h2>
        <div className="glass-card founder-card text-center" style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
          <div className="founder-image-container" style={{ marginBottom: '1.5rem' }}>
            <img
              src="/founder.png"
              alt="Founder and CEO"
              style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '50%', border: '4px solid var(--primary-color)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
            />
          </div>
          <h3>Mr. Yugbadal Singh</h3>
          <p className="text-primary" style={{ fontWeight: '600', marginBottom: '1rem' }}>Managing Director</p>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            Leading Yellow Pipes Engineering with a vision to provide innovative, sustainable, and reliable construction services in the City Gas Distribution sector.
          </p>
        </div>
      </motion.div>

      <div className="values-grid">
        <motion.div
          className="glass-card value-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Target className="value-icon text-primary" size={48} />
          <h2>Mission</h2>
          <p>To be one of a leading Construction Company of City Gas Distribution services in India in the next 7 years.</p>
        </motion.div>

        <motion.div
          className="glass-card value-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Eye className="value-icon text-primary" size={48} />
          <h2>Vision</h2>
          <p>To provide Innovative, time-bound, reliable and efficient Construction services meeting the expectations of our Clients.</p>
        </motion.div>

        <motion.div
          className="glass-card value-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Gem className="value-icon text-primary" size={48} />
          <h2>Values</h2>
          <p>Our core values are Transparency, Integrity and Commitment towards all stakeholders.</p>
        </motion.div>
      </div>

      <motion.div
        className="company-details-section mt-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="section-title text-center">Company <span className="text-primary">Details</span></h2>
        <div className="glass-card table-responsive">
          <table className="custom-table">
            <tbody>
              <tr>
                <td>COMPANY NAME</td>
                <td>M/s <strong>YELLOW PIPES ENGINEERING</strong></td>
              </tr>
              <tr>
                <td>REGISTERED ADDRESS</td>
                <td>HOUSE NO 1848, SECTOR 61, MOHALI, SAS NAGAR, PUNJAB, 160062</td>
              </tr>
              <tr>
                <td>CONSTITUTION OF BUSINESS</td>
                <td>PARTNERSHIP</td>
              </tr>
              <tr>
                <td>CONTACT PERSON</td>
                <td>MR. YUGBADAL SINGH</td>
              </tr>
              <tr>
                <td>DESIGNATION</td>
                <td>AUTHORISED PARTNER</td>
              </tr>
              <tr>
                <td>CONTACT NO.</td>
                <td>9888845445</td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td>yellowpipes.engg@gmail.com</td>
              </tr>
              <tr>
                <td>PAN NO.</td>
                <td>AACFY9760B</td>
              </tr>
              <tr>
                <td>GSTN No.</td>
                <td>03AACFY9760B1Z9</td>
              </tr>
              <tr>
                <td>BANK NAME</td>
                <td>IDFC BANK, PHASE-7, MOHALI, PUNJAB</td>
              </tr>
              <tr>
                <td>ACCOUNT NO.</td>
                <td>10101291092</td>
              </tr>
              <tr>
                <td>IFSC CODE</td>
                <td>IDFB0021371</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        className="document-section mt-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
      >
        <h2 className="section-title text-center">Company <span className="text-primary">Registrations</span></h2>
        <div className="documents-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', padding: '1rem' }}>
          
          <div className="glass-card text-center p-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="text-primary" style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>GST Certificate</h3>
            <img 
              src="/gst-paper.png" 
              alt="GST Certificate - Yellow Pipes Engineering" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            />
          </div>

          <div className="glass-card text-center p-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="text-primary" style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>MSME Registration</h3>
            <img 
              src="/msme-paper.png" 
              alt="MSME Registration - Yellow Pipes Engineering" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            />
          </div>

        </div>
      </motion.div>

      <motion.div
        className="key-personnel-section mt-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="section-title text-center">Key <span className="text-primary">Personnel</span></h2>
        <div className="glass-card table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>S. No</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>QUALIFICATION</th>
                <th>EXPERIENCE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mr. Yugbadal Singh</td>
                <td>Project Manager</td>
                <td>Masters in Administration</td>
                <td>10 years</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mr. Tajinder Singh</td>
                <td>Sr. Consultant</td>
                <td>Chartered Engineer</td>
                <td>40 years</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mrs. Lakhvinder Baluja</td>
                <td>Manager - Finance</td>
                <td>Chartered Accountant</td>
                <td>18 years</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mr. Sanchit Lamba</td>
                <td>Accountant / Billing Engineer</td>
                <td>B. Com.</td>
                <td>15 years</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mr. Farooq Jamal</td>
                <td>Supervisor</td>
                <td>B. Tech. - Mechanical</td>
                <td>6 years</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Mr. Mritunjay</td>
                <td>Technician</td>
                <td>Inter-mediate</td>
                <td>10 years</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Mr. Rejaul Hoque</td>
                <td>Helper</td>
                <td>Matric</td>
                <td>15 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
