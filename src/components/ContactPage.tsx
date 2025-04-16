import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-navy-100">Get in touch with us for any inquiries about our programs</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-700 mb-8">Get In Touch</h2>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-navy-700 mb-4">Liverpool School of Neuroscience Acupuncture</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gold-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-navy-700">
                      Maitri Building<br />
                      127-131 Picton Road<br />
                      Liverpool, L15 4LG<br />
                      United Kingdom
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-gold-500 mr-3" />
                    <a href="mailto:admin@lsna.org.uk" className="text-navy-700 hover:text-gold-600">
                      admin@lsna.org.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-gold-500 mr-3" />
                    <a href="tel:03301333100" className="text-navy-700 hover:text-gold-600">
                      0330 1333 100
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-navy-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-navy-700 mb-4">Opening Hours</h3>
                <div className="space-y-2 text-navy-700">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-700 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;