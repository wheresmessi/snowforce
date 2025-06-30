import React, { useEffect, useState } from 'react';
import {
  Home,
  Search,
  FolderOpen,
  MapPin,
  Handshake,
  Package,
  TrendingUp,
  Building,
  Users,
  Target,
  DollarSign,
  User,
  Building2,
  BarChart3,
  FileText,
  FolderCheck,
  Settings,
  PieChart,
} from 'lucide-react';

interface OrbitItem {
  id: number;
  name: string;
  icon: string;
  orbit: number;
  angle: number;
}

const SolutionsSection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const solutions: OrbitItem[] = [
    { id: 1, name: 'Main', icon: 'Home', orbit: 1, angle: 0 },
    { id: 2, name: 'Projects', icon: 'FolderOpen', orbit: 1, angle: 60 },
    { id: 3, name: 'Site', icon: 'MapPin', orbit: 1, angle: 120 },
    { id: 4, name: 'Work Progress', icon: 'TrendingUp', orbit: 1, angle: 180 },
    { id: 5, name: 'Asset', icon: 'Building', orbit: 1, angle: 240 },
    { id: 6, name: 'CRM', icon: 'Users', orbit: 1, angle: 300 },
    { id: 7, name: 'Inspection', icon: 'Search', orbit: 2, angle: 0 },
    { id: 8, name: 'Vendor', icon: 'Handshake', orbit: 2, angle: 30 },
    { id: 9, name: 'Material', icon: 'Package', orbit: 2, angle: 60 },
    { id: 10, name: 'Postsales', icon: 'Target', orbit: 2, angle: 90 },
    { id: 11, name: 'Client Billing', icon: 'DollarSign', orbit: 2, angle: 120 },
    { id: 12, name: 'HRM', icon: 'User', orbit: 2, angle: 150 },
    { id: 13, name: 'Property', icon: 'Building2', orbit: 2, angle: 180 },
    { id: 14, name: 'Financial Accounts', icon: 'BarChart3', orbit: 2, angle: 210 },
    { id: 15, name: 'GST', icon: 'FileText', orbit: 2, angle: 240 },
    { id: 16, name: 'DMS', icon: 'FolderCheck', orbit: 2, angle: 270 },
    { id: 17, name: 'Admin', icon: 'Settings', orbit: 2, angle: 300 },
    { id: 18, name: 'Management Info', icon: 'PieChart', orbit: 2, angle: 330 },
  ];

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Home,
      Search,
      FolderOpen,
      MapPin,
      Handshake,
      Package,
      TrendingUp,
      Building,
      Users,
      Target,
      DollarSign,
      User,
      Building2,
      BarChart3,
      FileText,
      FolderCheck,
      Settings,
      PieChart,
    };
    return iconMap[iconName];
  };

  return (
    <div
      className="min-h-screen py-32 relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background-secondary)' }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 relative" style={{ height: '900px' }}>
        {/* Central Content */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4"
          style={{ maxWidth: '400px' }}
        >
          <h2
            className="text-4xl lg:text-5xl font-normal mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Our Solutions
          </h2>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Comprehensive tools that revolve around your infrastructure needs
          </p>
          <button
            className="font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--color-button-primary)',
              color: 'var(--color-button-primary-text)',
            }}
          >
            Explore Solutions
            <svg
              className="h-5 w-5 inline-block ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div
            className="absolute border-2 rounded-full"
            style={{
              width: '500px',
              height: '500px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderColor: 'var(--color-secondary-dark)',
              opacity: 0.2,
            }}
          />
          <div
            className="absolute border-2 rounded-full"
            style={{
              width: '750px',
              height: '750px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderColor: 'var(--color-secondary-dark)',
              opacity: 0.1,
            }}
          />
        </div>

        {/* Orbiting Items */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10">
          {solutions.map((item) => {
            const radius = item.orbit === 1 ? 250 : 375;
            const currentAngle = (item.angle + rotation) % 360;
            const radians = (currentAngle * Math.PI) / 180;
            const x = radius * Math.cos(radians);
            const y = radius * Math.sin(radians);

            const IconComponent = getIcon(item.icon);

            return (
              <div
                key={item.id}
                className="absolute text-center transition-all duration-300 ease-in-out hover:scale-110 hover:z-30"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:rotate-12"
                  style={{
                    backgroundColor: 'var(--color-button-primary)',
                    boxShadow: '0 4px 8px rgba(7, 123, 150, 0.3)',
                  }}
                >
                  {IconComponent && <IconComponent className="w-6 h-6 md:w-7 md:h-7" style={{ color: 'white' }} />}
                </div>
                <div
                  className="mt-2 text-sm md:text-base font-medium px-2 py-1 rounded-md whitespace-nowrap"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    color: 'var(--color-secondary-dark)',
                  }}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Background Orbs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 + rotation * 0.3) % 360;
            const radians = (angle * Math.PI) / 180;
            const radius = 200 + (i % 3) * 120; // Increased radius for floating orbs
            const x = radius * Math.cos(radians);
            const y = radius * Math.sin(radians);
            const size = 6 + (i % 3) * 2; // Slightly larger orbs

            return (
              <div
                key={`floating-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: 'var(--color-secondary)',
                  opacity: 0.8,
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse 3s infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;