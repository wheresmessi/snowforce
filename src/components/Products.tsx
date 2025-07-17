import  { useState } from 'react';
import Map from './shared/Map';
import SolutionsSection from './shared/SolutionsSection';
import ContactForm from './shared/ContactForm';
import '../styles/colors.css';
import TextContainer from './shared/TextContainer';
import { AttachMoney, Speed, AccountBalance, SupportAgent, TrendingUp } from '@mui/icons-material';


const Products = () => {

  const stats = [
    { label: 'Projects Completed', value: '2,500+' },
    { label: 'Team Members', value: '200+' },
    { label: 'Countries Served', value: '45+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Active Users', value: '25,000+' },
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMonthlySubscription, setIsMonthlySubscription] = useState(true);

  return (
    <div style={{ backgroundColor: 'var(--color-background-dark)' }}>
      <ContactForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Book a Call"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <img
      src="/assets/product-bg.jpg"
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay with multiple layers for gradient effect */}
  <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-overlay)' }}></div>
  
  {/* Radial gradient overlay */}
  <div 
    className="absolute inset-0" 
    style={{ 
      background: 'radial-gradient(70% 70% at 50% 50%, transparent 45%, rgba(46, 60, 75, 0.5) 80%, rgba(46, 60, 75, 0.8) 100%)',
      pointerEvents: 'none'
    }}
  ></div>
  
  {/* Bottom gradient fade */}
  <div 
    className="absolute bottom-0 left-0 right-0 h-64" 
    style={{ 
      background: 'linear-gradient(to top, var(--color-background-dark), transparent)'
    }}
  ></div>

  {/* Content */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="flex justify-center mb-6">
      <img 
        src="/assets/conforce.png" 
        alt="Conforce Logo" 
        className="h-16 md:h-20 w-auto"
      />
    </div>
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 font-['Roboto'] font-normal text-white">
      The Smart Force Behind Every Construction Project
    </h2>
    <p className="text-xl md:text-2xl mb-10 font-medium text-gray-200">
      Streamlining projects, powering decisions, and driving growth for modern infrastructure teams.
    </p>
    <button 
      onClick={() => setIsModalOpen(true)}
      className="relative bg-[var(--color-button-secondary)] hover:bg-[var(--color-focus)] text-[var(--color-text-muted)] font-medium px-12 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
    >
      <span className="relative z-10">Book a Call</span>
    </button>
  </div>
</section>

      {/* Why Choose Conforce Section */}
      <section className="min-h-screen py-20" style={{ backgroundColor: 'var(--color-background-dark)' }}>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <TextContainer>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
                  POWERING INFRA GIANTS:
                </h3>
                <h2 className="text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
                  Complete Control from <br /> Land to Ledger
                </h2>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Conforce delivers unmatched efficiency and control for your projects, with proven success in optimizing construction operations.
              </p>
              <ul className="flex flex-wrap gap-8">
                {/* Feature 1 */}
                <li className="flex items-center gap-4">
                  <AttachMoney fontSize="large" style={{ color: 'var(--color-secondary)' }} />
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    <strong>Track Costs & Ensure Timely Payments</strong> – Gain full control over budgets, billing, and contractor dues.
                  </span>
                </li>
                {/* Feature 2 */}
                <li className="flex items-center gap-4">
                  <Speed fontSize="large" style={{ color: 'var(--color-secondary)' }} />
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    <strong>Streamlined Workflows for Faster Decisions</strong> – Move projects forward with clarity and speed.
                  </span>
                </li>
                {/* Feature 3 */}
                <li className="flex items-center gap-4">
                  <AccountBalance fontSize="large" style={{ color: 'var(--color-secondary)' }} />
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    <strong>Robust Financial Module</strong> – From expenses to approvals, you won’t miss a penny.
                  </span>
                </li>
                {/* Feature 4 */}
                <li className="flex items-center gap-4">
                  <SupportAgent fontSize="large" style={{ color: 'var(--color-secondary)' }} />
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    <strong>Next-Door Customer Support</strong> – Local, responsive, and ready when you need us.
                  </span>
                </li>
                {/* Feature 5 */}
                <li className="flex items-center gap-4">
                  <TrendingUp fontSize="large" style={{ color: 'var(--color-secondary)' }} />
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    <strong>Optimize Productivity, Minimize Risk, Drive Growth</strong> – Built to empower infrastructure teams at every level.
                  </span>
                </li>
              </ul>
            </div>
          </TextContainer>
          <div className="bg-[var(--color-primary)]/5 rounded-2xl p-8 border border-[var(--color-primary)]/30 shadow-2xl backdrop-blur-sm">
            <div className="space-y-6">
              <div className="text-5xl font-bold" style={{ color: 'var(--color-secondary)' }}>15+</div>
              <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-muted)' }}>Years of Excellence</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Delivering cutting-edge construction solutions worldwide</p>
              <div className="pt-6 space-y-4 border-t border-[var(--color-primary)]/30">
                {stats.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span style={{ color: 'var(--color-text-muted)' }}>{item.label}:</span>
                    <span style={{ color: 'var(--color-text-muted)' }} className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <SolutionsSection />
      {/* End of Our Solutions Section */}
      
            <section className="py-16" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="space-y-4 mb-12 text-center">
                  <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted1)' }}>
                    Trusted Across India 
                  </h3>
                  <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
                     From Coast to Core, We've Got It Covered
                  </h2>
                </div>
                <Map />
              </div>
            </section>
      {/* Pricing Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-background-dark)' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-normal mb-4" style={{ color: 'var(--color-secondary)' }}>
      Simple, Transparent Pricing
      </h2>
      <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
      Choose the perfect plan for your construction business needs
      </p>
      
      {/* Pricing Toggle */}
      <div className="flex items-center justify-center mt-8 mb-12">
  <div className="bg-[var(--color-primary)] p-1 rounded-lg flex relative">
    <div 
      className="absolute transition-all duration-300 h-full top-0 rounded-md bg-[var(--color-secondary)]" 
      style={{ 
        width: '50%',
        left: isMonthlySubscription ? '0%' : '50%'
      }}
    />
    <button
      onClick={() => setIsMonthlySubscription(true)}
      className={`px-6 py-2 rounded-md relative transition-colors duration-300 z-10 ${
        isMonthlySubscription ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-muted2)]'
      }`}
    >
      Monthly Cloud
    </button>
    <button
      onClick={() => setIsMonthlySubscription(false)}
      className={`px-6 py-2 rounded-md relative transition-colors duration-300 z-10 ${
        !isMonthlySubscription ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-muted2)]'
      }`}
    >
      One Time License
    </button>
  </div>
</div>

    </div>

    {/* Add this grid container for the pricing plans */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Basic Plan */}
      <div className="rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl" 
           style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="text-center">
          
          <h3 className="text-2xl font-normal mb-2" style={{ color: 'var(--color-text-muted)' }}>Basic</h3>
          <p className="mb-6" style={{ color: 'var(--color-primary-light)' }}>5 Modules</p>
          <div className="mb-8">
            {isMonthlySubscription ? (
    <>
      <span className="text-5xl font-bold" style={{ color: 'var(--color-text-muted)' }}>₹9,999</span>
      <span style={{ color: 'var(--color-primary-light)' }}>/month</span>
    </>
  ) : (
    <span className="text-xl" style={{ color: 'var(--color-primary-light)' }}>
      Contact sales for one-time license pricing
    </span>
  )}
          </div>
          <ul className="space-y-4 text-left">
            {[
              'Project Management',
              'Vendor Management',
              'Material Management',
              'Work Progress',
              'Financial Accounts'
            ].map((item) => (
              <li key={item} className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
                <svg className="h-5 w-5 mr-2" style={{ color: 'var(--color-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
            <li className="pt-4 border-t border-[var(--color-primary-light)]/20">
              <p className="font-medium mb-2" style={{ color: 'var(--color-primary-light)' }}>Also includes:</p>
              <ul className="space-y-2">
                {[
                  'Full Implementation',
                  'End-to-End Customization',
                  'Training 1 week',
                  'Year-long customer support',
                  'Post 12 Months: 15% AMC'
                ].map((item) => (
                  <li key={item} className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
                    <svg className="h-5 w-5 mr-2" style={{ color: 'var(--color-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Standard Plan (Previously Professional) */}
      <div className="rounded-xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
           style={{ background: `linear-gradient(to bottom right, var(--color-secondary), var(--color-secondary-dark))` }}>
        <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-lg"
             style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
          POPULAR
        </div>
        <div className="text-center">
          
          <h3 className="text-2xl font-normal mb-2" style={{ color: 'var(--color-text-muted)' }}>Standard</h3>
          <p className="mb-6" style={{ color: 'var(--color-primary-light)' }}>9 Modules</p>
          <div className="mb-8">
            {isMonthlySubscription ? (
    <>
      <span className="text-5xl font-bold" style={{ color: 'var(--color-text-muted)' }}>₹14,999</span>
      <span style={{ color: 'var(--color-primary-light)' }}>/month</span>
    </>
  ) : (
    <span className="text-xl" style={{ color: 'var(--color-primary-light)' }}>
      Contact sales for one-time license pricing
    </span>
  )}
          </div>
          <ul className="space-y-4 text-left">
            {[
              'Project Management',
              'Vendor Management',
              'Material Management',
              'Work Progress',
              'Financial Accounts',
              'Site Monitor',
              'Property Management',
              'Asset Management',
              'Management Information'
            ].map((item) => (
              <li key={item} className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
                <svg className="h-5 w-5 mr-2" style={{ color: 'var(--color-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
            <li className="pt-4 border-t border-[var(--color-primary-light)]/20">
              <p className="font-medium mb-2" style={{ color: 'var(--color-primary-light)' }}>Also includes:</p>
              <ul className="space-y-2">
                {[
                  'Full Implementation',
                  'End-to-End Customization',
                  '3-4 Weeks of Training',
                  'Year-long customer support',
                  'Post 12 Months: 15% AMC'
                ].map((item) => (
                  <li key={item} className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
                    <svg className="h-5 w-5 mr-2" style={{ color: 'var(--color-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
           style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="text-center">
          <h3 className="text-2xl font-normal mb-2" style={{ color: 'var(--color-text-muted)' }}>Enterprise</h3>
          <p className="mb-6" style={{ color: 'var(--color-primary-light)' }}>17 Modules</p>
          <div className="mb-8">
    {isMonthlySubscription ? (
    <>
      <span className="text-5xl font-bold" style={{ color: 'var(--color-text-muted)' }}>₹24,599</span>
      <span style={{ color: 'var(--color-primary-light)' }}>/month</span>
    </>
  ) : (
    <span className="text-xl" style={{ color: 'var(--color-primary-light)' }}>
      Contact sales for one-time license pricing
    </span>
  )}
          </div>
          <ul className="space-y-4 text-left">
            <li className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
              <svg className="h-5 w-5 mr-2" style={{ color: 'var(--color-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Complete Full Stack Functionality (17 modules)
            </li>
            <li className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
              <svg className="h-5 w-5 mr-2" style={{ color: 'var(--color-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Exclusive specialty modules like Land Bank & Inspection Modules
            </li>
            <li className="pt-4 border-t border-[var(--color-primary-light)]/20">
              <p className="font-medium mb-2" style={{ color: 'var(--color-primary-light)' }}>Also includes:</p>
              <ul className="space-y-2">
                {[
                  'Full Implementation',
                  'End-to-End Customization',
                  '1-2 weeks of training',
                  'Year-long customer support',
                  'Post 12 Months: 15% AMC'
                ].map((item) => (
                  <li key={item} className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
                    <svg className="h-5 w-5 mr-2" style={{ color: 'var(--color-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="mt-12 text-center">
      <p className="mb-4" style={{ color: 'var(--color-primary-light)' }}>Need help choosing the right plan?</p>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="font-medium flex items-center justify-center mx-auto transition-colors duration-300 hover:text-[var(--color-primary-light)]"
        style={{ 
          color: 'var(--color-secondary)'
        }}
      >
        Contact our sales team
        <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Products;