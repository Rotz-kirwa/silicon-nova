import './TrustSignals.css';

const TrustSignals = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '40+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="trust-signals">
      <div className="trust-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
