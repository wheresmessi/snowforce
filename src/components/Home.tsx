import React, { useEffect, useRef } from 'react';
import '../styles/colors.css';
import '../styles/carousel.css';
import TextContainer from './shared/TextContainer';
import ContactForm from './shared/ContactForm';
import { Link } from 'react-router-dom';

interface OfferingCardProps {
  title: string;
  description: string;
  isClickable?: boolean;
  isComingSoon?: boolean;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description, isClickable = true, isComingSoon = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col h-full relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        border: '1px solid var(--color-border)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isComingSoon && (
        <div 
          className="absolute top-4 right-4 text-white text-sm font-medium px-3 py-1 rounded-full"
          style={{ backgroundColor: '#F99934' }}
        >
          Coming Soon
        </div>
      )}
      <h3 
        className="text-2xl font-semibold mb-4 transition-colors duration-300"
        style={{ 
          color: isHovered ? '#EA762C' : 'var(--color-secondary)'
        }}
      >
        {title}
      </h3>
      <p 
        className="leading-relaxed flex-grow mb-6"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {description}
      </p>
      {isClickable ? (
        <Link 
          to="/products"
          className="inline-block bg-[var(--color-button-primary)] hover:bg-[var(--color-primary-light)] text-[var(--color-text-primary)] font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 text-center"
          onClick={() => window.scrollTo(0, 0)}
        >
          Learn More
        </Link>
      ) : (
        <button 
          disabled
          className="inline-block bg-[var(--color-button-primary)] text-[var(--color-text-primary)] font-medium py-2 px-6 rounded-lg opacity-50 cursor-not-allowed"
        >
          Learn More
        </button>
      )}
    </div>
  );
};

const ClientLogos: React.FC = () => {
  const logos = [
    "/assets/ndr.PNG",
    "/assets/sps.PNG",
    "/assets/ndr.PNG", 
    "/assets/sps.PNG",
    "/assets/ndr.PNG",
    "/assets/sps.PNG",
    "/assets/ndr.PNG", 
    "/assets/sps.PNG",
    "/assets/ndr.PNG",
    "/assets/sps.PNG",
    "/assets/ndr.PNG", 
    "/assets/sps.PNG",
  ];

  return (
    <div className="relative overflow-hidden h-[100px] w-full mx-auto">
      <div className="absolute left-0 flex animate-scroll">
        {logos.map((logo, index) => (
            <div
            key={`logo-${index}`}
            className="flex-shrink-0 w-[300px] flex items-center justify-center px-12"
            >
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-[70px] max-w-[400px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            </div>
        ))}
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  offset?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, image, offset = '' }) => (
  <div
    className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2 hover:scale-105 ${offset}`}
    style={{ backgroundColor: 'white', position: 'relative', zIndex: 20 }}
  >
    <div className="flex items-start gap-4">
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-secondary)' }}>{name}</h4>
        <p style={{ color: 'var(--color-text-muted2)' }}>{text}</p>
      </div>
    </div>
    <div className="absolute -top-2 -right-2 text-4xl" style={{ color: 'var(--color-secondary)', opacity: 0.2 }}>"</div>
  </div>
);

const animateCounter = (id: string, target: number, duration: number) => {
  const element = document.getElementById(id);
  if (!element) return;

  let start = 0;
  const increment = target / (duration / 16); // Approx. 60fps

  const updateCounter = () => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toString();
    } else {
      element.textContent = Math.floor(start).toString();
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
};

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const offerings = [
    {
      title: "Conforce",
      description: "Conforce brings project management, finance, procurement, and operations into one unified platform—empowering you to manage the entire infrastructure lifecycle with ease.",
      isComingSoon: false
    },
    {
      title: "Transforce",
      description: "Transforce is an all-in-one ERP solution that helps transport and logistics companies streamline fleet operations, manage shipments, optimize routes, and simplify billing — all through one easy-to-use platform.",
      isComingSoon: true
    },
    {
      title: "Wareforce",
      description: "Wareforce is a smart warehouse management solution that helps you track inventory, manage stock movements, and optimize storage — ensuring your warehouse runs smoothly and efficiently from end to end.",
      isComingSoon: true
    }
  ];

  const testimonials = [
    {
      name: "Mehwish",
      text: "Compliment interested discretion estimating on stimulated apartments oh.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Elizabeth Jeff", 
      text: "Dear so sing when in find read of call. As distrusts behaviour abilities defective is.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Thomas",
      text: "Never at water me might. On formed merits hunted unable merely by mr whence or.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.client-stats-section');
      console.log('Scroll event triggered'); // Debugging
      if (section) {
        console.log('Section found:', section.getBoundingClientRect()); // Debugging
        if (section.getBoundingClientRect().top < window.innerHeight) {
          console.log('Section is in viewport'); // Debugging
          animateCounter('client-count', 27, 2000); // Total clients
          animateCounter('location-count', 15, 2000); // Locations covered
          window.removeEventListener('scroll', handleScroll); // Remove listener after animation
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-[110vh] flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scaleY(-1)' }}
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-overlay)' }}></div>
        
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(70% 70% at 50% 50%, transparent 45%, rgba(46, 60, 75, 0.5) 80%, rgba(46, 60, 75, 0.8) 100%)',
            pointerEvents: 'none'
          }}
        ></div>
        
        <div className="absolute bottom-0 left-0 right-0 h-64" style={{ 
            background: 'linear-gradient(to top, var(--color-background-dark), transparent)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto -mt-40">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 font-['Roboto'] font-medium uppercase"
                style={{ color: 'var(--color-background-secondary)' }}>
              TRANSFORM TODAY<br />THRIVE TOMORROW
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-medium"
               style={{ color: 'var(--color-background-secondary)' }}>
              Revolutionising how infrastructure, logistics and warehouse companies work</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="min-h-screen flex items-center py-24" style={{ backgroundColor: 'var(--color-background-dark)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <TextContainer>
              <div className="space-y-8">
                <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
                    Why We Do<br />
                    What We Do<br />
                    
                  </h2>
                </div>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
                  At snowforce, we believe that industries like construction, warehousing, and logistics 
deserve technology that understands their challenges and unlocks their full potential. Our mission 
is to bridge the gap between complex operations and simple, powerful digital solutions.</p>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
                   We design custom ERP and CRM platforms tailored to your workflows—helping you 
streamline operations, cut costs, and boost productivity. From supply chain digitization to 
brand enhancement and customer relationship management, we’re here to make your 
systems smarter and your growth sustainable. <br /><br />Because when industries run better, businesses thrive—and that’s why we do what we do</p>
              </div>
            </TextContainer>

            <div className="relative">
              <img
                src="/assets/Capture.PNG"
                alt="Digital Transformation"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0" style={{ 
                background: 'linear-gradient(to right, var(--color-background-dark), transparent)' 
              }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
              Your Digital Edge Starts Here
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <OfferingCard 
                key={index}
                title={offering.title}
                description={offering.description}
                isClickable={!offering.isComingSoon}
                isComingSoon={offering.isComingSoon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
              Our Valued Clients
            </h2>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-background-dark)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pr-8">
              <h2
                className="text-5xl lg:text-6xl font-normal mb-6 leading-tight"
                style={{ color: 'var(--color-secondary)' }}
              >
                What Our<br /> Customers Says
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed max-w-md"
                style={{ color: 'var(--color-text-muted)' }}
              >
                We take pride in delivering solutions that make a real difference. Here’s what some of our 
clients have to say about partnering with us
                </p>
            </div>

            <div className="relative ">
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={index}
                    {...testimonial} 
                    offset={index % 2 === 0 ? "ml-16" : "ml-2"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-10 z-10">
          <img 
            src="/assets/snowforce-orange.png" 
            alt="Snowforce Logo" 
            className="w-[450px] opacity-60 hover:opacity-80 transition-opacity duration-500 transform hover:scale-105"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#E0E0E0' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-[var(--color-primary)] p-8 rounded-xl shadow-xl">
              <ContactForm 
                className="w-full"
                title="Get In Touch"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  We’re here to help you transform your business with the right technology solutions. Whether you 
have questions, want a demo, or need support, our team is just a message away. <br /><br />
Reach out to us today — let’s start building your digital future together.
                </p>
              </div>
                
            {/* address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-[var(--color-secondary)]">Phone Number</h4>
                    <p className="text-[var(--color-text-secondary)]">+918870035644</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-[var(--color-secondary)]">Email Address</h4>
                    <p className="text-[var(--color-text-secondary)]">info@snowforcetechnologies.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:col-span-2">
                  <svg className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-[var(--color-secondary)]">Our Office</h4>
                    <p className="text-[var(--color-text-secondary)]">10ᵗʰ floor, Gee Gee Crystals,</p>
                    <p className="text-[var(--color-text-secondary)]">Dr Radha Krishnan Salai, Jagadambal Colony,</p>
                    <p className="text-[var(--color-text-secondary)]">Mylapore, Chennai – 600004</p>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;