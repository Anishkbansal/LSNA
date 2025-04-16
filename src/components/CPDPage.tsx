import React from 'react';
import { Calendar, Clock, Brain, BookOpen, GraduationCap, CheckCircle2, Target, Users, ArrowUpRight, User, MapPin, Laptop, DollarSign } from 'lucide-react';

const CPDPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Neuropuncture CPD Workshops</h1>
          <p className="text-xl text-navy-100 mb-4">Transform your practice with evidence-based neuroscience acupuncture</p>
          <p className="text-lg text-navy-100 italic">
            "Neuropuncture is the only complete neuroscience acupuncture system that provides consistent, clinically reproducible neuroscience electro-acupuncture training."
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              {/* Workshop Overview */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-gold-500">
                <h2 className="text-2xl font-bold text-navy-700 mb-6">3-Day Intensive Workshop</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-gold-500" />
                      <div>
                        <span className="text-navy-700 font-semibold">8 Hours Per Day</span>
                        <p className="text-navy-600 text-sm">Total: 24 Hours of Training</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="h-6 w-6 text-gold-500" />
                      <span className="text-navy-700">Latest Neuroscience Research</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-6 w-6 text-gold-500" />
                      <span className="text-navy-700">Comprehensive Materials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-6 w-6 text-gold-500" />
                      <span className="text-navy-700">CPD Certificate</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-navy-700 font-semibold">Perfect for healthcare professionals:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Medical Doctors seeking to integrate evidence-based acupuncture</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Osteopaths expanding their treatment options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Qualified Acupuncturists advancing their practice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Expert Instructors */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-navy-700 mb-6">Learn from World-Class Experts</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-navy-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-white rounded-full mr-4">
                        <User className="h-8 w-8 text-gold-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-700">Dr. Michael Corradino</h3>
                        <p className="text-navy-600 text-sm">Creator of Neuropuncture</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Doctor of Neuroscience Acupuncture</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Doctor of Acupuncture & Oriental Medicine</span>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Neuropuncture Inc., Florida, USA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-navy-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-white rounded-full mr-4">
                        <User className="h-8 w-8 text-gold-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-700">Dr. Arun Vijayan</h3>
                        <p className="text-navy-600 text-sm">UK's Leading Expert</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Doctor of Neuroscience Acupuncture</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">Doctor of Acupuncture</span>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                        <span className="text-navy-700">First UK-based Certified Neuropuncture Specialist</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-navy-700 mb-6">Elevate Your Practice</h2>
                <p className="text-navy-700 text-lg leading-relaxed mb-8">
                  Bridge neuroscience with your clinical practice for consistent results, increased referrals, and enhanced patient satisfaction. Our groundbreaking system allows medical doctors, osteopaths, and qualified acupuncturists to integrate cutting-edge neuroscience acupuncture into their existing practice.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-navy-50 p-6 rounded-lg">
                    <Target className="h-8 w-8 text-gold-500 mb-4" />
                    <h3 className="font-semibold text-navy-700 mb-2">Evidence-Based</h3>
                    <p className="text-navy-600">Apply neuroscience-backed protocols for predictable outcomes</p>
                  </div>
                  <div className="bg-navy-50 p-6 rounded-lg">
                    <Users className="h-8 w-8 text-gold-500 mb-4" />
                    <h3 className="font-semibold text-navy-700 mb-2">Integrative Approach</h3>
                    <p className="text-navy-600">Complement your existing medical practice</p>
                  </div>
                  <div className="bg-navy-50 p-6 rounded-lg">
                    <ArrowUpRight className="h-8 w-8 text-gold-500 mb-4" />
                    <h3 className="font-semibold text-navy-700 mb-2">Enhanced Care</h3>
                    <p className="text-navy-600">Expand your treatment options with proven techniques</p>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <h2 className="text-2xl font-bold text-navy-700 mb-6">What You'll Learn</h2>
              <div className="space-y-6 mb-12">
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gold-500">
                  <h3 className="text-xl font-semibold text-navy-700 mb-3">Neuropuncture Trinity</h3>
                  <ul className="space-y-2 text-navy-700">
                    <li>• 5 Neurophysiological Mechanisms</li>
                    <li>• 5 Treatment Principles</li>
                    <li>• 5 Electrical Techniques</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gold-500">
                  <h3 className="text-xl font-semibold text-navy-700 mb-3">Clinical Applications</h3>
                  <ul className="space-y-2 text-navy-700">
                    <li>• Evidence-Based Treatment Protocols</li>
                    <li>• Pain Management Strategies</li>
                    <li>• Neurological Conditions</li>
                    <li>• Integration with Conventional Medicine</li>
                  </ul>
                </div>
              </div>

              {/* Why Train in the UK */}
              <div className="bg-navy-50 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-navy-700 mb-4">Why Train in the UK?</h3>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-navy-700 text-lg mb-4">
                    No need to travel to the USA - we're bringing the industry experts directly to you in the UK. Learn from the pioneers of Neuropuncture while saving time and travel costs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                      <span className="text-navy-700">Train with both US and UK-based experts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                      <span className="text-navy-700">Save on international travel and accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                      <span className="text-navy-700">Network with UK healthcare professionals</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NeuroLab Access */}
              <div className="bg-navy-50 rounded-lg p-8 mb-12">
                <div className="flex items-start space-x-4">
                  <Laptop className="h-12 w-12 text-gold-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-navy-700 mb-4">Exclusive NeuroLab Access</h3>
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-navy-700 text-lg mb-4">
                        Get a special 10-day pass to NeuroLab, Neuropuncture's comprehensive online training platform.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                          <span className="text-navy-700">Deep dive into neurophysiological mechanisms</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                          <span className="text-navy-700">Prepare for the workshop with foundational knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                          <span className="text-navy-700">Access comprehensive training materials</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workshop Investment */}
              <div className="bg-gradient-to-r from-navy-50 to-navy-100 rounded-lg p-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-white p-3 rounded-full">
                      <DollarSign className="h-12 w-12 text-gold-500" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-navy-700 mb-4">Workshop Investment</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-gold-500">
                        <h4 className="text-lg font-semibold text-navy-700 mb-4">Full Payment</h4>
                        <p className="text-3xl font-bold text-navy-700 mb-2">$1,225 USD</p>
                        <p className="text-navy-600 text-sm mb-4">Complete Workshop Package</p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-gold-500 mr-2" />
                            <span className="text-navy-600 text-sm">All workshop materials</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-gold-500 mr-2" />
                            <span className="text-navy-600 text-sm">10-day NeuroLab access</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-gold-500 mr-2" />
                            <span className="text-navy-600 text-sm">CPD certificate</span>
                          </li>
                        </ul>
                        <a 
                          href="https://checkout.neuropuncture.com/3-day-neuropuncture-workshop-8292025/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gold-500 text-navy-900 text-center px-6 py-3 rounded-md hover:bg-gold-600 transition-colors font-semibold"
                        >
                          Secure Your Place Now
                        </a>
                      </div>
                      <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-navy-500">
                        <h4 className="text-lg font-semibold text-navy-700 mb-4">Split Payment</h4>
                        <p className="text-3xl font-bold text-navy-700 mb-2">$625 × 2 USD</p>
                        <p className="text-navy-600 text-sm mb-4">Two installments</p>
                        <div className="p-3 bg-navy-50 rounded-lg mb-6">
                          <p className="text-sm text-navy-700">
                            Split your investment into two manageable payments while enjoying all workshop benefits
                          </p>
                        </div>
                        <a 
                          href="https://checkout.neuropuncture.com/3-day-neuropuncture-workshop-8292025-pp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-navy-600 text-white text-center px-6 py-3 rounded-md hover:bg-navy-700 transition-colors font-semibold"
                        >
                          Choose Split Payment
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-navy-600 italic mt-4 text-center">
                      Payments are in USD and are securely processed by our U.S.-based training partner, Neuropuncture Inc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-navy-50 rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-navy-700 mb-3">Upcoming Sessions</h3>
                    <div className="bg-white rounded-lg p-6 mb-6">
                      <p className="text-navy-700 font-semibold mb-2">Next Workshop: 29-31 August, 2025 • Liverpool, UK</p>
                      <p className="text-navy-600">
                        Secure your place in this exclusive workshop. Limited spots available.
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href="mailto:admin@lsna.org.uk"
                        className="inline-block bg-gold-500 text-navy-900 px-6 py-3 rounded-md hover:bg-gold-600 transition-colors font-semibold"
                      >
                        Reserve Your Place
                      </a>
                      <a 
                        href="tel:03301333100"
                        className="inline-block bg-navy-600 text-white px-6 py-3 rounded-md hover:bg-navy-700 transition-colors font-semibold"
                      >
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CPDPage;