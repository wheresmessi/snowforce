import { useState } from 'react';

interface ContactFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  isOpen, 
  onClose, 
  title = 'Contact Us',
  className = ''
}) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/info@snowforcetechnologies.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          if (onClose) onClose();
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (isOpen === false) return null;

  return (
    <div className={`${isOpen !== undefined ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4' : ''} ${className}`}>
      <div className={`bg-white rounded-lg p-8 w-full ${isOpen !== undefined ? 'max-w-md' : ''} relative`}>
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close form"
          >
            ✕
          </button>
        )}
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@yourmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full text-white py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50"
              style={{
              backgroundColor: '#EA762C',
              ...(status !== 'sending' && { 
                // Slightly darken on hover if not sending
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              })
              }}
              onMouseOver={e => {
              if (status !== 'sending') {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#06697f';
              }
              }}
              onMouseOut={e => {
              if (status !== 'sending') {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#077B96';
              }
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
          {status === 'success' && (
            <p className="text-green-600 text-center">✅ Your message was sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">❌ Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
