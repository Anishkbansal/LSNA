import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white p-3 rounded-lg">
                <img 
                  src="https://i.postimg.cc/QMBSdGTR/LSNA-transparant.png" 
                  alt="LSNA Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <div className="text-sm text-navy-100">
              <p className="mb-4">© {new Date().getFullYear()} Liverpool School of Neuroscience Acupuncture.</p>
              <div className="space-x-4">
                <button 
                  onClick={() => onNavigate('privacy-policy')}
                  className="text-navy-100 hover:text-gold-500 transition-colors"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Partners</h3>
            <div className="space-y-6">
              <a 
                href="https://neuropuncture.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-lg p-4 transition-transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://i.postimg.cc/m2x1JcBx/Neuropuncture-logomark-color.png" 
                    alt="Neuropuncture Inc."
                    className="h-12 w-auto"
                  />
                  <span className="text-navy-700 font-semibold">Neuropuncture, Inc.</span>
                </div>
              </a>
              <a 
                href="https://www.acupuncturesociety.org.uk"
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-lg p-4 transition-transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://www.acupuncturesociety.org.uk/logo/as_logo.png" 
                    alt="The Acupuncture Society"
                    className="h-12 w-auto"
                  />
                  <span className="text-navy-700 font-semibold">The Acupuncture Society, UK</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;