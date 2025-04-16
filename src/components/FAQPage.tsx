import React from 'react';
import { Mail } from 'lucide-react';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-navy-100">Find answers to common questions about our programs and institution</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Mail className="h-6 w-6 text-gold-500 mr-2" />
            <p className="text-navy-700">
              Please reach us at{' '}
              <a href="mailto:admin@lsna.org.uk" className="text-gold-500 hover:text-gold-600">
                admin@lsna.org.uk
              </a>{' '}
              if you cannot find an answer to your question.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-navy-700 mb-4">
                What is the Liverpool School of Neuroscience Acupuncture?
              </h2>
              <p className="text-navy-600">
                The Liverpool School of Neuroscience Acupuncture is an educational institution that combines traditional acupuncture practises with contemporary neuroscience insights, offering a unique training programme for practitioners.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-navy-700 mb-4">
                What qualifications do I need to attend one of your courses?
              </h2>
              <p className="text-navy-600">
                The course requirements are different for every course - contact us directly for more information.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-navy-700 mb-4">
                Do you offer any online courses?
              </h2>
              <p className="text-navy-600">
                Due to the nature of the training courses, we do not offer wholly online training. Our training is hybrid with classroom, online interactive classes, and hands-on clinical training.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-navy-700 mb-4">
                What makes your approach to acupuncture different?
              </h2>
              <p className="text-navy-600">
                We specialise in Neuroscience Acupuncture, combining traditional acupuncture principles with cutting-edge neuroscience to target complex neurological and chronic pain conditions effectively. Additionally, Neuroscience Acupuncture treatments can help with a wide range of internal medicine conditions, providing holistic care for digestive disorders, hormonal imbalances, and more. Our evidence-based approach teaches students to personalize treatments for their patients to address the root cause of health concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage