import Layout from '../components/layout/Layout';
import SEO from '../components/ui/SEO';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';
import TrustSignals from '../components/home/TrustSignals';

const Home = () => {
  return (
    <Layout>
      <SEO />
      <HeroSection />
      <ServicesOverview />
      <PortfolioPreview />
      <Testimonials />
      <TrustSignals />
    </Layout>
  );
};

export default Home;
