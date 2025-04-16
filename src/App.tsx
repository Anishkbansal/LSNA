import React, { useState } from 'react';
import { Mail, MapPin, Brain, GraduationCap, Clock, Users, Award, BookOpen, Building2, CheckCircle2, Phone } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgramsPage from './components/ProgramsPage';
import FAQPage from './components/FAQPage';
import FacultyPage from './components/FacultyPage';
import ContactPage from './components/ContactPage';
import CPDPage from './components/CPDPage';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'privacy-policy') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <PrivacyPolicy />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  if (currentPage === 'programmes') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <ProgramsPage />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  if (currentPage === 'cpd') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <CPDPage />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  if (currentPage === 'faq') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <FAQPage />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  if (currentPage === 'faculty') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <FacultyPage />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <ContactPage />
        <Footer onNavigate={setCurrentPage} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/50DG8hTC/ai-generated-8957948-1280.png"
            alt="Modern Acupuncture Treatment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-700/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-4">Transforming Acupuncture Education in the UK</h1>
            <p className="text-xl text-gold-500">Empowering learners for a brighter future</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-navy-700 mb-6">Our Vision</h2>
            <div className="space-y-6">
              <p className="text-lg text-navy-700 leading-relaxed">
                At the Liverpool School of Neuroscience Acupuncture, we are redefining acupuncture by blending traditional practices with cutting-edge neuroscience insights.
              </p>
              <p className="text-lg text-navy-700 leading-relaxed">
                Our curriculum provides practitioners with unique training in a neuroscience-based approach to acupuncture, empowering them to engage the nervous system in precise and therapeutic ways.
              </p>
              <p className="text-lg text-navy-700 leading-relaxed">
                Developed by leading experts from the UK, the US, India, and New Zealand, our course offers an unparalleled opportunity to specialise in Neuroscience Acupuncture and achieve consistent, replicable results in clinical practice.
              </p>
              <p className="text-lg text-navy-700 leading-relaxed">
                The Neuroscience Acupuncture programme is offered in partnership with Neuropuncture Inc, FL, USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Neuroscience Acupuncture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-8 text-center">What is Neuroscience Acupuncture?</h2>
          <div className="bg-navy-50 p-8 rounded-lg">
            <p className="text-navy-700 text-lg leading-relaxed">
              Neuroscience Acupuncture is a unique acupuncture system that integrates 21st-century medical sciences into the classical acupuncture model. Our comprehensive program teaches practitioners a complete neuroscience acupuncture system that provides consistent, clinically reproducible neuroscience electro-acupuncture training.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose LSNA Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-12 text-center">Why Choose LSNA?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-8 w-8 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy-700">Hybrid Learning Model</h3>
              <p className="text-navy-600">Experience a blend of live online sessions and in-person training for flexible, comprehensive learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy-700">Expert Faculty</h3>
              <p className="text-navy-600">Learn from courses developed by renowned experts in acupuncture and neuroscience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-8 w-8 text-gold-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy-700">Career Progression</h3>
              <p className="text-navy-600">Unlock pathways to advanced degrees and professional certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-12 text-center">Our Comprehensive Programmes</h2>
          
          {/* Level 6 Program */}
          <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-navy-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Level 6 Neuroscience Acupuncture (BNA)</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gold-500 mr-2" />
                    <span className="text-navy-700">Duration: 3 years</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                    <span className="text-navy-700">Credits: 363 (323 Academic, 40 Hands-On Training)</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-gold-500 mr-2" />
                    <span className="text-navy-700">Delivery: Hybrid (Live Online + In-Person Training)</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-navy-700">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                      <span className="text-navy-700">Cutting-edge neuroscience integrated with traditional acupuncture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                      <span className="text-navy-700">Advanced techniques for neuromodulation and neurorehabilitation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                      <span className="text-navy-700">Accredited by The Acupuncture Society</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-700 mb-8">Contact Us</h2>
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
              <p className="text-navy-700 mb-6">
                Thank you for considering us for your Neuroscience Acupuncture educational needs. Once you fill out the enquiry form, a member of our team will get in touch with you within 48 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;