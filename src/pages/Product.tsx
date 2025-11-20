import Hero from '../components/Hero';
import SpecTable from '../components/SpecTable';
import CTASection from '../components/CTASection';

const Product = () => {
  const specifications = [
    {
      model: 'QT-100',
      outletDiameter: '4 inches',
      dimension: '12" x 12" x 18"',
      weight: '25 lbs',
    },
    {
      model: 'QT-200',
      outletDiameter: '6 inches',
      dimension: '18" x 18" x 24"',
      weight: '45 lbs',
    },
    {
      model: 'QT-300',
      outletDiameter: '8 inches',
      dimension: '24" x 24" x 30"',
      weight: '75 lbs',
    },
    {
      model: 'QT-400',
      outletDiameter: '10 inches',
      dimension: '30" x 30" x 36"',
      weight: '110 lbs',
    },
  ];

  return (
    <div>
      <Hero
        title="Product Specifications"
        subtitle="Engineered for performance in municipal and commercial applications"
        backgroundImage="/images/hero_concrete.png"
      />

      {/* Product Render Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/images/render_quicktrap.png" 
              alt="Quicktrap Product Render" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-6">
              Quicktrap Product Line
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Quicktrap series offers a range of models designed to meet various flow requirements
              and installation scenarios. Each unit features our patented debris capture system that
              maintains optimal flow while preventing blockages.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              All models are constructed from corrosion-resistant materials and include easy-access
              maintenance ports for simplified cleaning and inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 bg-brand-light blueprint-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8 text-center">
              Technical Specifications
            </h2>
            <SpecTable specs={specifications} />
            <p className="text-sm text-gray-600 mt-4 text-center">
              * Custom sizes available upon request. Contact us for specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-brand-accent text-2xl">✓</div>
                <div>
                  <h3 className="font-semibold text-brand mb-2">Patented Flow Design</h3>
                  <p className="text-gray-600">Maintains optimal flow rates while capturing debris</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-brand-accent text-2xl">✓</div>
                <div>
                  <h3 className="font-semibold text-brand mb-2">Corrosion Resistant</h3>
                  <p className="text-gray-600">Industrial-grade materials for long-term durability</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-brand-accent text-2xl">✓</div>
                <div>
                  <h3 className="font-semibold text-brand mb-2">Easy Maintenance</h3>
                  <p className="text-gray-600">Quick-access ports for simplified cleaning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-brand-accent text-2xl">✓</div>
                <div>
                  <h3 className="font-semibold text-brand mb-2">Load Rated</h3>
                  <p className="text-gray-600">Certified for heavy traffic applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Choosing the Right Model?"
        description="Our team can help you select the perfect Quicktrap model for your specific application."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Installation Guide"
        secondaryButtonLink="/installation"
      />
    </div>
  );
};

export default Product;
