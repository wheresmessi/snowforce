import React, { useState } from 'react';
import Map from './shared/Map';
import SolutionsSection from './shared/SolutionsSection';
import ContactForm from './shared/ContactForm';
import '../styles/colors.css';
import TextContainer from './shared/TextContainer';
import { AttachMoney, Speed, AccountBalance, SupportAgent, TrendingUp } from '@mui/icons-material';

interface OrbitItem {
  id: number;
  name: string;
  icon: string;
  orbit: number;
  angle: number;
}

const Products = () => {
  const features = [
    'Proven track record of 98% on-time project delivery',
    'Average 23% reduction in project costs for our clients',
    '24/7 dedicated support from construction experts',
    'Seamless integration with existing tools and workflows',
    'Military-grade security for your project data',
    'Scalable solutions for projects of any size',
  ];

  const stats = [
    { label: 'Projects Completed', value: '2,500+' },
    { label: 'Team Members', value: '200+' },
    { label: 'Countries Served', value: '45+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Active Users', value: '25,000+' },
  ];

  const solutions: OrbitItem[] = [
    { id: 1, name: 'Project Mgmt', icon: '📊', orbit: 1, angle: 0 },
    { id: 2, name: 'Collaboration', icon: '🤝', orbit: 1, angle: 90 },
    { id: 3, name: 'Analytics', icon: '📈', orbit: 1, angle: 180 },
    { id: 4, name: 'Documents', icon: '📑', orbit: 1, angle: 270 },
    { id: 5, name: 'Resource Track', icon: '📋', orbit: 2, angle: 0 },
    { id: 6, name: 'Mobile Access', icon: '📱', orbit: 2, angle: 60 },
    { id: 7, name: 'Custom Reports', icon: '📄', orbit: 2, angle: 120 },
    { id: 8, name: 'Scheduling', icon: '📅', orbit: 2, angle: 180 },
    { id: 9, name: 'Inventory', icon: '📦', orbit: 2, angle: 240 },
    { id: 10, name: 'Safety Tools', icon: '🦺', orbit: 2, angle: 300 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <p className="text-xl" style={{ color: 'var(--color-text-muted2)' }}>
              Choose the perfect plan for your construction business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-[#2A2A2A] rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4B8898]/20">
              <div className="text-center">
                <h3 className="text-2xl font-normal text-[#EEEEEE] mb-2">Basic</h3>
                <p className="text-[#99CCD9] mb-6">Perfect for small projects</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#EEEEEE]">₹7,999</span>
                  <span className="text-[#99CCD9]">/month</span>
                </div>
                <button className="w-full bg-[#4B8898] hover:bg-[#5BA8B8] text-[#1F1F1F] font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-8">
                  Get Started
                </button>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 5 team members
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3 active projects
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic support
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Plan */}
            <div className="bg-gradient-to-br from-[#4B8898] to-[#3A6A7A] rounded-xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#99CCD9] text-[#1F1F1F] text-xs font-bold px-4 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-normal text-[#EEEEEE] mb-2">Professional</h3>
                <p className="text-[#D1E7EC] mb-6">Ideal for growing teams</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#EEEEEE]">₹24,999</span>
                  <span className="text-[#D1E7EC]">/month</span>
                </div>
                <button className="w-full bg-[#1F1F1F] hover:bg-[#333333] text-[#EEEEEE] font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-8">
                  Get Started
                </button>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 20 team members
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    15 active projects
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API access
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#2A2A2A] rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4B8898]/20">
              <div className="text-center">
                <h3 className="text-2xl font-normal text-[#EEEEEE] mb-2">Enterprise</h3>
                <p className="text-[#99CCD9] mb-6">For large organizations</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#EEEEEE]">Custom</span>
                </div>
                <button className="w-full bg-[#4B8898] hover:bg-[#5BA8B8] text-[#1F1F1F] font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-8">
                  Contact Sales
                </button>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited team members
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited projects
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    On-premise deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#99CCD9] mb-4">Need help choosing the right plan?</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-[#4B8898] hover:text-[#99CCD9] font-medium flex items-center justify-center mx-auto"
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