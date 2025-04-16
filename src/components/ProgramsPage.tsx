import React from 'react';
import { Clock, GraduationCap, BookOpen, Users, Award, Brain, CheckCircle2, FileText, Stethoscope, School, Zap, Star } from 'lucide-react';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Level 6 Neuroscience Acupuncture (BNA)</h1>
          <p className="text-xl text-navy-100">An innovative, hybrid course integrating traditional acupuncture principles with cutting-edge modern neuroscience</p>
          
          {/* Fast-track banner */}
          <div className="mt-8 bg-gold-500 rounded-lg p-4 flex items-center">
            <Star className="h-6 w-6 text-navy-900 mr-3" />
            <p className="text-navy-900 font-semibold">
              Fast-Track Program Available
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <Zap className="h-8 w-8 text-gold-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-navy-700 mb-2">Fast-Track Your Career (Preferred Option)</h3>
                  <p className="text-navy-700 text-lg">
                    Complete your BNA qualification in just 24 calendar months through our intensive fast-track program. This accelerated path maintains the same high standards while allowing you to enter practice sooner. Perfect for dedicated students ready for an intensive learning experience.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-navy-700 text-lg leading-relaxed mb-6">
              The Level 6 Neuroscience Acupuncture (BNA) programme is an innovative, hybrid course that integrates traditional acupuncture principles with cutting-edge modern neuroscience. This comprehensive curriculum, accredited by The Acupuncture Society, is designed to prepare students for advanced, evidence-informed acupuncture practices.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed mb-6">
              University accreditation is currently pending, further emphasising our commitment to aligning the program with global academic and professional standards.
            </p>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-8">Programme Structure and Delivery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fast-track Program (Displayed First) */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gold-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-navy-900 px-4 py-1 rounded-full font-semibold">
                Preferred Option
              </div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <Zap className="h-6 w-6 text-gold-500 mr-2" />
                Fast-Track Program (24 Calendar Months)
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-gold-500 mr-3" />
                  <span className="text-navy-700">Complete in Just 24 Calendar Months</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-gold-500 mr-3" />
                  <span className="text-navy-700">Same Full BNA Qualification</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-gold-500 mr-3" />
                  <span className="text-navy-700">Intensive Learning Schedule</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-gold-500 mr-3" />
                  <span className="text-navy-700">Start Your Practice Sooner</span>
                </div>
              </div>
            </div>

            {/* Standard Program */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-navy-700 mb-4">Standard Program (3 year route)</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-gold-500 mr-3" />
                  <span className="text-navy-700">Total Credits: 363 (1 credit = 10 hours)</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-gold-500 mr-3" />
                  <span className="text-navy-700">Academic Credits: 323</span>
                </div>
                <div className="flex items-center">
                  <Stethoscope className="h-6 w-6 text-gold-500 mr-3" />
                  <span className="text-navy-700">Hands-on Training Credits: 40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Curriculum */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-8">Core Curriculum</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-navy-700 mb-6">The BNA program includes 9 core modules and 1 elective, covering topics such as:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                  <span className="text-navy-700">Foundations of Traditional Acupuncture</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                  <span className="text-navy-700">Neuroscience Principles in Acupuncture</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                  <span className="text-navy-700">Electrical Stimulation Techniques for Neuromodulation</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                  <span className="text-navy-700">Clinical Case Management and Evaluations</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                  <span className="text-navy-700">Ethical Practices and Patient Communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessments */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-8">Assessments</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-navy-700">Written and practical exams</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-navy-700">Case studies and continuous case study evaluations</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-navy-700">Direct feedback during clinical practice</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-navy-700">Clinical competency evaluations</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-navy-700">A Capstone CARE Project focused on practical applications in neuro-modulation, neuro-rehabilitation, or neuro-regulation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-8">Entry Requirements</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-navy-700">Standard Entry</h3>
                <p className="text-navy-600">3 A Levels in Physics, Chemistry, and Biology (or equivalent)</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-navy-700">Alternative Entry</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <School className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                    <span className="text-navy-600">Level 3 qualification in Anatomy, Physiology, and Pathology</span>
                  </li>
                  <li className="flex items-start">
                    <School className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                    <span className="text-navy-600">OR Access to Higher Learning (Health Sciences or similar)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-700 mb-8">Career Progression</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-navy-700 mb-6">
              Graduates of the BNA programme will be equipped to advance their careers in integrative medicine and acupuncture. Opportunities include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <GraduationCap className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-navy-700">Entry into Integrated Master of Neuroscience Acupuncture Research (MARe) + Doctor of Neuroscience Acupuncture (DNA) program at Akamai University, USA</span>
              </li>
              <li className="flex items-start">
                <Award className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-navy-700">Akamai University is accredited by ASIC, recognized internationally and by UK Visas and Immigration (UKVI)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;