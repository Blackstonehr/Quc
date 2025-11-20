import Hero from '../components/Hero';
import TestimonialBlock from '../components/TestimonialBlock';
import CTASection from '../components/CTASection';

const CaseStudies = () => {
  return (
    <div>
      <Hero
        title="Case Studies"
        subtitle="Real-world success stories from municipal and commercial installations"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand mb-6">
              Proven Results Across Applications
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Quicktrap has been successfully deployed in hundreds of installations across North America.
              Here are two representative case studies demonstrating the effectiveness of our solutions
              in different environments.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1: Municipal */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <TestimonialBlock
              title="City of Riverside - Municipal Stormwater Management"
              subtitle="Pilot Program | Municipal Application"
              content="The City of Riverside faced recurring issues with storm drain blockages in a high-traffic commercial district, leading to street flooding during heavy rainfall events. After evaluating several solutions, the city selected Quicktrap for a pilot installation at three critical locations. The results exceeded expectations: within the first year, maintenance calls for blockages dropped by 85%, and street flooding incidents were eliminated entirely. The city has since expanded the program to include 50 additional locations across the municipality. 'Quicktrap has transformed our stormwater management approach,' said the Public Works Director. 'The reduction in emergency maintenance calls alone has paid for the installation costs, and our residents are seeing real improvements in flood prevention.'"
              imageBefore="/images/case-study-before.jpg"
              imageAfter="/images/case-study-after.jpg"
              stats={[
                { label: 'Blockage Reduction', value: '85%' },
                { label: 'Maintenance Savings', value: '$45K/yr' },
                { label: 'Flood Events', value: '0' },
                { label: 'Units Installed', value: '53' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Case Study 2: Commercial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <TestimonialBlock
              title="Westfield Shopping Center - Parking Lot Retrofit"
              subtitle="Retrofit Project | Commercial Application"
              content="Westfield Shopping Center, a 500,000 sq ft retail complex, experienced chronic drainage problems in their parking areas, with standing water creating safety hazards and customer complaints. The existing catch basins were frequently clogged with leaves, trash, and sediment from the surrounding landscape. The facility management team retrofitted 24 existing catch basins with Quicktrap units over a single weekend, minimizing disruption to operations. The impact was immediate and dramatic. Drainage performance improved significantly, standing water issues were resolved, and maintenance requirements decreased by 70%. The shopping center also achieved compliance with updated stormwater regulations, avoiding potential fines. 'The installation was quick, the results were immediate, and our maintenance team loves how easy they are to service,' noted the Facilities Manager. 'This was one of the best infrastructure investments we've made.'"
              imageBefore="/images/case-study-before.jpg"
              imageAfter="/images/case-study-after.jpg"
              stats={[
                { label: 'Maintenance Reduction', value: '70%' },
                { label: 'Installation Time', value: '2 days' },
                { label: 'Customer Complaints', value: '-95%' },
                { label: 'ROI Period', value: '18 mo' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Success Metrics */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8 text-center">
              Aggregate Performance Across All Installations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-brand-accent mb-2">500+</div>
                <div className="text-sm text-gray-600">Units Installed</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-brand-accent mb-2">78%</div>
                <div className="text-sm text-gray-600">Avg. Maintenance Reduction</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-brand-accent mb-2">99.2%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-brand-accent mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Service Life</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8 text-center">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-light rounded-lg p-6">
                <div className="text-brand-accent text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  The Quicktrap system has been a game-changer for our municipality. We've seen
                  dramatic reductions in maintenance costs and flooding incidents.
                </p>
                <p className="text-brand font-semibold">- Director of Public Works</p>
                <p className="text-sm text-gray-600">City of Riverside</p>
              </div>

              <div className="bg-brand-light rounded-lg p-6">
                <div className="text-brand-accent text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  Installation was seamless, and the performance has exceeded our expectations.
                  Our maintenance team appreciates how easy they are to service.
                </p>
                <p className="text-brand font-semibold">- Facilities Manager</p>
                <p className="text-sm text-gray-600">Westfield Shopping Center</p>
              </div>

              <div className="bg-brand-light rounded-lg p-6">
                <div className="text-brand-accent text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  We've installed Quicktrap units across multiple properties and consistently
                  see improved drainage performance and reduced maintenance requirements.
                </p>
                <p className="text-brand font-semibold">- Property Manager</p>
                <p className="text-sm text-gray-600">Regional Property Management</p>
              </div>

              <div className="bg-brand-light rounded-lg p-6">
                <div className="text-brand-accent text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  The ROI was clear within the first year. Fewer emergency calls, better
                  performance, and happier residents. Highly recommended.
                </p>
                <p className="text-brand font-semibold">- City Engineer</p>
                <p className="text-sm text-gray-600">Town of Lakeside</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to See Similar Results?"
        description="Join hundreds of satisfied customers who have improved their stormwater management with Quicktrap."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Product Details"
        secondaryButtonLink="/product"
      />
    </div>
  );
};

export default CaseStudies;
