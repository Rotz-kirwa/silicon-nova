import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import './About.css';

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="about-hero">
          <h1>About Silicon Nova</h1>
          <p className="hero-tagline">Building Digital Experiences for Kenya and the World</p>
        </div>

        <div className="about-content">
          <section className="story-section">
            <h2>Our Story</h2>
            <p>
              Silicon Nova was founded with a simple mission: to help businesses in Kenya and across the globe
              establish a powerful online presence. We believe that every business deserves a website that not
              only looks stunning but also drives real results.
            </p>
            <p>
              With years of experience in web development, design, and digital strategy, our team has helped
              dozens of clients transform their ideas into successful digital products. From small startups to
              established enterprises, we bring the same level of dedication and expertise to every project.
            </p>
          </section>

          <section className="mission-vision">
            <div className="mission-vision-grid">
              <Card variant="elevated" className="mission-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with cutting-edge web solutions that drive growth, enhance user
                  experience, and deliver measurable results.
                </p>
              </Card>

              <Card variant="elevated" className="vision-card">
                <div className="card-icon">🚀</div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading web development partner for businesses across Africa, known for innovation,
                  quality, and client satisfaction.
                </p>
              </Card>

              <Card variant="elevated" className="values-card">
                <div className="card-icon">💎</div>
                <h3>Our Values</h3>
                <ul>
                  <li>Quality over quantity</li>
                  <li>Client-focused approach</li>
                  <li>Continuous innovation</li>
                  <li>Transparent communication</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="team-section">
            <h2>Meet Our Team</h2>
            <p className="team-intro">
              Our diverse team of developers, designers, and strategists work together to create exceptional
              digital experiences.
            </p>
            <div className="team-grid">
              <Card hoverable className="team-member">
                <div className="member-avatar">👨‍💻</div>
                <h4>Development Team</h4>
                <p>Expert developers skilled in modern technologies and best practices.</p>
              </Card>

              <Card hoverable className="team-member">
                <div className="member-avatar">🎨</div>
                <h4>Design Team</h4>
                <p>Creative designers focused on user experience and visual excellence.</p>
              </Card>

              <Card hoverable className="team-member">
                <div className="member-avatar">📊</div>
                <h4>Strategy Team</h4>
                <p>Strategic thinkers who ensure your project achieves its goals.</p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
