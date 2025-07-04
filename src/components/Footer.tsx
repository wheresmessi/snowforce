import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles/colors.css';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--color-background-dark)',
        backdropFilter: 'blur(10px)',
      }}
      className="py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Navigation Links */}
          <div className="space-y-6">
            <div>
              <img
                src="/assets/image.png"
                alt="Conforce Logo"
                className="h-8 w-auto mb-4"
              />
              <nav className="space-y-2">
                <a
                  href="/proddu"
                  className="block transition-colors duration-200 hover:text-[var(--color-button-primary)]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Products
                </a>
                <a
                  href="#"
                  className="block transition-colors duration-200 hover:text-[var(--color-button-primary)]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  About
                </a>
                <a
                  href="#"
                  className="block transition-colors duration-200 hover:text-[var(--color-button-primary)]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <SocialIcon
                url="https://www.linkedin.com/company/snowforce-technologies/"
                bgColor="transparent"
                fgColor="var(--color-text-muted)"
                style={{ height: 32, width: 32 }}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://www.instagram.com/snowforce_technologies?igsh=MXM5eWY1YmFrdzhhaA=="
                bgColor="transparent"
                fgColor="var(--color-text-muted)"
                style={{ height: 32, width: 32 }}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://www.facebook.com/"
                bgColor="transparent"
                fgColor="var(--color-text-muted)"
                style={{ height: 32, width: 32 }}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://twitter.com/"
                network="x"
                bgColor="transparent"
                fgColor="var(--color-text-muted)"
                style={{ height: 32, width: 32 }}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3
              className="text-lg font-medium"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Contact Us
            </h3>
            <div className="space-y-2">
              <p
                className="flex items-center space-x-2 hover:text-[var(--color-button-primary)] transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <span>Tel: +918870035644</span>
              </p>
              <p
                className="flex items-center space-x-2 hover:text-[var(--color-button-primary)] transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <span>Email: info@snowforcetechnologies.com</span>
              </p>
              <div className="pt-2">
                <p style={{ color: 'var(--color-text-muted)' }}>
                  10ᵗʰ floor, Gee Gee Crystals,
                </p>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Dr Radha Krishnan Salai, Jagadambal
                </p>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Colony, Mylapore, Chennai - 600004
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-[var(--color-border-secondary)]">
          <p
            className="text-sm text-center"
            style={{ color: 'var(--color-text-muted)' }}
          >
            © {new Date().getFullYear()} Conforce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;