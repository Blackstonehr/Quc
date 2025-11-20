import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';

const Home = () => {
  const features = [
    {
      icon: <span className="h-12 w-12 bg-brand-accent block rounded-sm" />,
      title: 'Superior Flow Management',
      description: 'Advanced design ensures optimal water flow while capturing debris and sediment, preventing blockages in storm drainage systems.',
    },
    {
      icon: <span className="h-12 w-12 bg-brand-accent block rounded-sm" />,
      title: 'Easy Installation',
      description: 'Quick and straightforward installation process that integrates seamlessly with existing infrastructure, minimizing downtime and labor costs.',
    },
    {
      icon: <span className="h-12 w-12 bg-brand-accent block rounded-sm" />,
      title: 'Durable Construction',
      description: 'Built with industrial-grade materials to withstand harsh weather conditions and heavy loads, ensuring long-term reliability.',
    },
    {
      icon: <span className="h-12 w-12 bg-brand-accent block rounded-sm" />,
      title: 'Environmentally Friendly',
      description: 'Helps protect waterways by filtering pollutants and debris before they enter the storm water system, supporting environmental compliance.',
    },
  ];

  return (
    <div>
      <Hero
        title="Keep Storm Lines Open"
        subtitle="Advanced stormwater management solutions that prevent blockages and protect your infrastructure"
        backgroundImage="/images/hero.jpg"
        ctaText="Learn More"
        ctaLink="#features"
      />

      {/* Features Section */}
      <section id="features" className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Why Choose Quicktrap?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineered for performance, designed for reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Protect Your Infrastructure?"
        description="Contact us today to learn how Quicktrap can help keep your storm lines open and flowing."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </div>
  );
};

export default Home;
