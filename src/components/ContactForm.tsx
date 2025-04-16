import React, { useState } from 'react';
import { Send, Phone, Mail, ExternalLink } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showAlternatives, setShowAlternatives] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Send email to admin@lsna.org.uk
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
      `.trim();

      const mailtoUrl = `mailto:admin@lsna.org.uk?subject=Contact from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;

      // Show alternatives if mailto fails
      setTimeout(() => {
        setShowAlternatives(true);
      }, 1000);

      // Clear form and show success message
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus('success');

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setShowAlternatives(true);
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-navy-700 font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-navy-700 font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-navy-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-navy-700 font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            required
          ></textarea>
        </div>

        {status === 'success' && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
            Thank you for your message. We'll get back to you soon!
          </div>
        )}

        {status === 'error' && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
            There was an error sending your message. Please try one of the alternative contact methods below.
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full bg-gold-500 text-navy-900 py-3 px-6 rounded-md hover:bg-gold-600 transition-colors font-semibold flex items-center justify-center ${
            status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          <Send className="h-5 w-5 mr-2" />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Alternative Contact Methods */}
      <div className={`mt-8 space-y-6 ${showAlternatives ? 'block' : 'block'}`}>
        <div className="bg-navy-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-navy-700 mb-4">Alternative Ways to Contact Us</h3>
          
          <div className="space-y-4">
            <a 
              href="tel:03301333100"
              className="flex items-center p-4 bg-white rounded-md hover:bg-navy-100 transition-colors"
            >
              <Phone className="h-5 w-5 text-gold-500 mr-3" />
              <div>
                <p className="font-medium text-navy-700">Call Us</p>
                <p className="text-navy-600">0330 1333 100</p>
              </div>
              <ExternalLink className="h-4 w-4 text-navy-400 ml-auto" />
            </a>

            <a 
              href="mailto:admin@lsna.org.uk"
              className="flex items-center p-4 bg-white rounded-md hover:bg-navy-100 transition-colors"
            >
              <Mail className="h-5 w-5 text-gold-500 mr-3" />
              <div>
                <p className="font-medium text-navy-700">Email Us</p>
                <p className="text-navy-600">admin@lsna.org.uk</p>
              </div>
              <ExternalLink className="h-4 w-4 text-navy-400 ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;