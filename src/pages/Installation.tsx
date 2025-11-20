import Hero from '../components/Hero';
import CTASection from '../components/CTASection';

const Installation = () => {
  const installationSteps = [
    {
      title: 'Site Preparation',
      description: 'Ensure the installation area is clear of debris and properly excavated to accommodate the Quicktrap unit. Verify that the base is level and compacted.',
    },
    {
      title: 'Position the Unit',
      description: 'Carefully lower the Quicktrap unit into the prepared excavation using appropriate lifting equipment. Ensure proper alignment with existing drainage infrastructure.',
    },
    {
      title: 'Connect Inlet and Outlet',
      description: 'Attach inlet and outlet pipes to the Quicktrap unit using approved connectors and sealants. Verify all connections are watertight and secure.',
    },
    {
      title: 'Backfill and Compact',
      description: 'Backfill around the unit with approved material in 6-inch lifts, compacting each layer to prevent settling. Maintain proper grade for surface drainage.',
    },
    {
      title: 'Install Access Cover',
      description: 'Place the access cover securely on the unit, ensuring it is properly seated and locked. Verify the cover is flush with the surrounding surface.',
    },
    {
      title: 'Test and Inspect',
      description: 'Conduct a flow test to verify proper operation. Inspect all connections for leaks and ensure the unit is functioning as designed.',
    },
    {
      title: 'Final Documentation',
      description: 'Complete installation documentation including photos, GPS coordinates, and maintenance schedule. Provide owner with operation and maintenance manual.',
    },
  ];

  return (
    <div>
      <Hero
        title="Installation Guide"
        subtitle="Professional installation procedures for optimal performance"
        backgroundImage="/images/hero_grate.png"
      />

      {/* Installation Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-6">
              Installation Overview
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Proper installation of Quicktrap units is essential for optimal performance and longevity.
              Follow these step-by-step instructions to ensure a successful installation.
            </p>
            <div className="bg-brand-accent/10 border-l-4 border-brand-accent p-4 mb-8">
              <p className="text-brand font-semibold mb-2">⚠️ Important Safety Notice</p>
              <p className="text-gray-700">
                Installation should only be performed by qualified professionals with appropriate safety
                equipment and training. Always follow local codes and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 bg-brand-light blueprint-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8 text-center">
              Step-by-Step Installation
            </h2>
            <ol className="space-y-6">
              {installationSteps.map((step, index) => (
                <li key={index} className="bg-white rounded-lg shadow-md p-6 flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent text-brand rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-brand mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Tools and Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8">
              Required Tools and Materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-brand mb-4">Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Excavation equipment (backhoe or excavator)
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Lifting equipment (crane or hoist)
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Level and measuring tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Compaction equipment
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Pipe cutting and fitting tools
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand mb-4">Materials</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Quicktrap unit (appropriate model)
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Inlet and outlet pipes
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Approved connectors and sealants
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Backfill material (per specifications)
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    Safety equipment (PPE)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-6">
              Post-Installation Maintenance
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Regular maintenance ensures optimal performance and extends the life of your Quicktrap unit:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-brand-accent mr-2 text-xl">✓</span>
                <span>Inspect unit quarterly or after major storm events</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-2 text-xl">✓</span>
                <span>Remove accumulated debris as needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-2 text-xl">✓</span>
                <span>Check all connections for signs of wear or damage</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-2 text-xl">✓</span>
                <span>Maintain detailed maintenance logs</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent mr-2 text-xl">✓</span>
                <span>Schedule professional inspection annually</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Installation Support?"
        description="Our technical team is available to provide installation guidance and support."
        primaryButtonText="Contact Support"
        primaryButtonLink="/contact"
        secondaryButtonText="View Product Specs"
        secondaryButtonLink="/product"
      />
    </div>
  );
};

export default Installation;
