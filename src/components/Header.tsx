import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/colors.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#about';
      return;
    }
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleProductsClick = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.products-dropdown')) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
      style={{ 
        backgroundColor: isScrolled || isMobileMenuOpen ? 'var(--color-primary)' : 'transparent',
        boxShadow: isScrolled || isMobileMenuOpen ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/image.png"
              alt="Autono Logo"
              className="h-12 w-auto sm:h-12"
            />
          </Link>

          {/* Right side navigation and buttons */}
          <div className="flex items-center justify-end flex-1 space-x-8">
            {/* Navigation */}
            <nav className={`
              md:flex md:space-x-8
              ${isMobileMenuOpen ? 'flex' : 'hidden'}
              md:relative md:top-auto md:right-auto md:bg-transparent
              absolute top-full right-0 left-0 
              flex-col md:flex-row
              space-y-4 md:space-y-0
              py-4 md:py-0
              px-4 md:px-0
              bg-[var(--color-primary)]
              md:translate-y-0
              transition-all duration-300
              w-full md:w-auto
            `}>
              {/* Products Dropdown */}
              <div className="relative products-dropdown w-full md:w-auto">
                <button 
                  onClick={handleProductsClick}
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#99CCD9] w-full md:w-auto text-left"
                >
                  Products
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`
                    ${isProductsOpen ? 'block' : 'hidden'}
                    md:absolute md:left-0 md:mt-2 md:w-48
                    md:bg-white md:rounded-lg md:shadow-lg
                    bg-[var(--color-primary)]/80 md:bg-white
                    rounded-lg
                    mt-2
                    w-full
                    border border-white/10 md:border-gray-200
                  `}
                >
                  <Link 
                    to="/products" 
                    className="flex items-center px-4 py-2 text-sm text-white md:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-white md:rounded-t-lg transition-colors duration-200"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsProductsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img 
                      src="/assets/conforce.png" 
                      alt="Conforce Logo" 
                      className="h-2.5 w-auto mr-1.5"
                    />
                    <span>Conforce</span>
                  </Link>
                  <div className="block px-4 py-2 text-sm text-gray-400/60 cursor-not-allowed border-t border-white/10 md:border-gray-200">
                    Transforce
                  </div>
                  <div className="block px-4 py-2 text-sm text-gray-400/60 cursor-not-allowed border-t border-white/10 md:border-gray-200 md:rounded-b-lg">
                    Wareforce
                  </div>
                </div>
              </div>

              <button 
                onClick={scrollToAbout}
                className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#99CCD9] w-full md:w-auto text-left"
              >
                About
              </button>
            </nav>

            {/* Contact Button */}
            <button 
              onClick={scrollToFooter}
              className={`
                items-center px-6 py-2 rounded-full 
                transition-all duration-300 
                bg-white text-black hover:bg-teal-400 hover:text-white
                ${isMobileMenuOpen ? 'flex' : 'hidden md:inline-flex'}
              `}
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden" 
              style={{ color: 'white' }}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsProductsOpen(false);
              }}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 