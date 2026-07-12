import { motion } from 'framer-motion';
import { Settings, Truck, Wrench, Shield, Zap } from 'lucide-react';
import './Equipment.css';

const Equipment = () => {
  const equipments = [
    { name: "Electro-fusion machine with Bar Code and Control Box with leads", qty: "2 Nos.", icon: <Zap /> },
    { name: "Molling Equipment, HDD Equipment", qty: "As per req", icon: <Settings /> },
    { name: "PE Squeezing Tools for 180, 125, 63, 62 and 20mm Pipes", qty: "4 nos", icon: <Wrench /> },
    { name: "Universal Pipe Scrapper 20mm - 180 mm / hand scrapper", qty: "2 nos", icon: <Wrench /> },
    { name: "PE Pipe Cutter / Guillotine", qty: "2 nos", icon: <Wrench /> },
    { name: "Cable and Pipe Locator", qty: "As per req", icon: <Settings /> },
    { name: "Water Tanker", qty: "As per req", icon: <Truck /> },
    { name: "Tractor with Compressor", qty: "As per req", icon: <Truck /> },
    { name: "Air Compressor (3 HP)", qty: "2 no", icon: <Zap /> },
    { name: "Hammer Drill", qty: "1 nos", icon: <Wrench /> },
    { name: "Power Generator (5 kVA) Make Honda", qty: "1 no", icon: <Zap /> },
    { name: "Conversion Kit", qty: "2 nos", icon: <Settings /> },
    { name: "Four Wheeler", qty: "2 Nos", icon: <Truck /> },
    { name: "Two Wheeler", qty: "2 no", icon: <Truck /> },
    { name: "Power Cable", qty: "300 mtrs.", icon: <Zap /> },
    { name: "Safety Helmets", qty: "10 nos", icon: <Shield /> },
    { name: "Safety Harness belt", qty: "3 nos", icon: <Shield /> },
  ];

  return (
    <div className="equipment-page section container">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="subtitle text-primary">Our Arsenal</span>
        <h1 style={{ marginBottom: '1.5rem' }}>Tools & <span className="text-primary">Equipment</span></h1>
        <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
          We maintain our own extensive infrastructure with equipment operated by skilled manpower to ensure project execution is never delayed due to machinery unavailability.
        </p>
      </motion.div>

      <div className="equipment-grid">
        {equipments.map((item, index) => (
          <motion.div 
            className="equipment-card glass-card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.1 }}
          >
            <div className="equipment-icon text-primary">
              {item.icon}
            </div>
            <div className="equipment-info">
              <h3>{item.name}</h3>
              <span className="qty-badge">{item.qty}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="equipment-footer glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <Settings className="text-primary" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <div>
            <p><strong>Note:</strong> Any other equipment required for completion of MDPE pipeline laying and GI Installation work but not specifically mentioned above shall be deployed.</p>
            <p className="text-primary" style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>* The above mentioned equipments shall be deployed in good working conditions.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Equipment;
