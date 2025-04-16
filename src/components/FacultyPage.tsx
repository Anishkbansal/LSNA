import React from 'react';
import { User, Award, Building2, GraduationCap } from 'lucide-react';

const FacultyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Our Faculty</h1>
          <p className="text-xl text-navy-100">Meet our distinguished team of experts in neuroscience acupuncture</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Michael D. Corradino */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy-50 rounded-full">
                  <User className="h-8 w-8 text-gold-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-700 mb-2">Michael D. Corradino</h2>
                  <p className="text-navy-600 mb-1">DNA, DAOM, MSTOM, AP</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Doctor of Neuroscience Acupuncture</span>
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Doctor of Acupuncture & Oriental Medicine</span>
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Master in the Science of Traditional Oriental Medicine</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Neuropuncture Inc., FL, USA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Syed Shabbir Ashraf */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy-50 rounded-full">
                  <User className="h-8 w-8 text-gold-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-700 mb-2">Mr. Syed Shabbir Ashraf</h2>
                  <p className="text-navy-600 mb-1">MS, FRCS, FRCSEd</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center">
                      <Award className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Consultant Surgeon- General, Emergency & Day Surgery</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Liverpool University Hospital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Peter Larking */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy-50 rounded-full">
                  <User className="h-8 w-8 text-gold-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-700 mb-2">Peter Larking</h2>
                  <p className="text-navy-600 mb-1">BHSc, Cert.N</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center">
                      <Award className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Licenced Acupuncturist</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Cert. Neuropuncturist</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Cert. Neuropuncture Instructor</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Neuromedtec, New Zealand</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Arun Vijayan */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy-50 rounded-full">
                  <User className="h-8 w-8 text-gold-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-700 mb-2">Arun Vijayan</h2>
                  <p className="text-navy-600 mb-1">DNA, MD (Ac), MSc Ost, MPH (c)</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Doctor of Neuroscience Acupuncture</span>
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Doctor of Acupuncture</span>
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Master of Science in Osteopathic Medicine</span>
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Master of Public Health & Postgraduate AI in Neuroscience Research (Candidate)</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Cert. Neuropuncturist</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="h-5 w-5 text-gold-500 mr-2" />
                      <span className="text-navy-700">Maitri Liverpool, UK</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hilary Dyer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy-50 rounded-full">
                  <User className="h-8 w-8 text-gold-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-700 mb-2">Hilary Dyer</h2>
                  <p className="text-navy-600 mb-1">Student Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;