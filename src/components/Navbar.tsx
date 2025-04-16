import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center py-4">
          {/* Logo and School Name */}
          <div 
            className="cursor-pointer mb-2 flex flex-col items-center" 
            onClick={() => onNavigate('home')}
          >
            <img 
              src="https://i.postimg.cc/QMBSdGTR/LSNA-transparant.png" 
              alt="LSNA Logo" 
              className="h-28 md:h-40 w-auto mb-2"
            />
            <h1 className="text-center">
              <span className="text-navy-700 text-xl md:text-2xl font-bold">Liverpool School of</span>
              <br />
              <span className="text-gold-500 text-xl md:text-2xl font-bold">Neuroscience Acupuncture</span>
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-navy-700 hover:text-gold-500 hover:bg-navy-50"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Navigation tabs - Mobile */}
          <div className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col items-center space-y-4 w-full pb-4`}>
            <button 
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              className={`${
                currentPage === 'home' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500'
              } w-full text-center py-2`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                onNavigate('programmes');
                setIsMenuOpen(false);
              }}
              className={`${
                currentPage === 'programmes' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500'
              } w-full text-center py-2`}
            >
              Programmes
            </button>
            <button 
              onClick={() => {
                onNavigate('cpd');
                setIsMenuOpen(false);
              }}
              className={`${
                currentPage === 'cpd' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500'
              } w-full text-center py-2`}
            >
              CPD
            </button>
            <button 
              onClick={() => {
                onNavigate('faculty');
                setIsMenuOpen(false);
              }}
              className={`${
                currentPage === 'faculty' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500'
              } w-full text-center py-2`}
            >
              Faculty
            </button>
            <button 
              onClick={() => {
                onNavigate('faq');
                setIsMenuOpen(false);
              }}
              className={`${
                currentPage === 'faq' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500'
              } w-full text-center py-2`}
            >
              FAQ
            </button>
            <button 
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className={`${
                currentPage === 'contact' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500'
              } w-full text-center py-2`}
            >
              Contact
            </button>
          </div>

          {/* Navigation tabs - Desktop */}
          <div className="hidden md:flex space-x-12">
            <button 
              onClick={() => onNavigate('home')}
              className={`${
                currentPage === 'home' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500 hover:border-b-2 hover:border-gold-500'
              } pb-2 transition-all duration-200`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('programmes')}
              className={`${
                currentPage === 'programmes' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500 hover:border-b-2 hover:border-gold-500'
              } pb-2 transition-all duration-200`}
            >
              Programmes
            </button>
            <button 
              onClick={() => onNavigate('cpd')}
              className={`${
                currentPage === 'cpd' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500 hover:border-b-2 hover:border-gold-500'
              } pb-2 transition-all duration-200`}
            >
              CPD
            </button>
            <button 
              onClick={() => onNavigate('faculty')}
              className={`${
                currentPage === 'faculty' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500 hover:border-b-2 hover:border-gold-500'
              } pb-2 transition-all duration-200`}
            >
              Faculty
            </button>
            <button 
              onClick={() => onNavigate('faq')}
              className={`${
                currentPage === 'faq' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500 hover:border-b-2 hover:border-gold-500'
              } pb-2 transition-all duration-200`}
            >
              FAQ
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`${
                currentPage === 'contact' 
                  ? 'text-gold-500 border-b-2 border-gold-500' 
                  : 'text-navy-700 hover:text-gold-500 hover:border-b-2 hover:border-gold-500'
              } pb-2 transition-all duration-200`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;