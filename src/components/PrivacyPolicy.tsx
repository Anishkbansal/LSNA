import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-navy-100">Effective Date: 25th November 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-navy-700 mb-8">
            At Liverpool School of Neuroscience Acupuncture (LSNA), accessible at lsna.org.uk, your privacy is one of our top priorities. This privacy policy outlines how we collect, use, and protect your personal data when you visit our website, interact with us, or utilise our services.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect and process the following information about you:</p>
            
            <h3 className="text-xl font-semibold text-navy-700 mb-2">a. Personal Data You Provide Directly:</h3>
            <ul className="list-disc pl-6 mb-4 text-navy-600">
              <li>Name, email address, and phone number (e.g., via contact forms or registrations)</li>
              <li>Billing and payment details (if enrolling in courses or services)</li>
              <li>Other personal details you provide voluntarily when contacting us or signing up for updates</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy-700 mb-2">b. Automatically Collected Data:</h3>
            <ul className="list-disc pl-6 mb-4 text-navy-600">
              <li>IP address, browser type, operating system, and referral sources</li>
              <li>Usage data such as pages visited, time spent on the site, and navigation paths</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy-700 mb-2">c. Third-Party Sources:</h3>
            <p className="text-navy-600">
              We may receive data from social media platforms or third-party providers if you interact with us through these channels.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We collect and process your data to:</p>
            <ul className="list-decimal pl-6 text-navy-600">
              <li>Provide, personalise, and improve our services</li>
              <li>Communicate with you, including sending updates, responding to enquiries, and delivering marketing materials (where you've consented)</li>
              <li>Process payments and manage enrolments</li>
              <li>Ensure website functionality and monitor usage trends to improve user experience</li>
              <li>Comply with legal obligations or protect our rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="text-navy-600">
              We use cookies to enhance your browsing experience, track site usage, and deliver personalised content. By using our site, you consent to our use of cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">4. Sharing Your Information</h2>
            <p className="mb-4">We do not sell your personal data. However, we may share it with:</p>
            <ul className="list-decimal pl-6 text-navy-600">
              <li>Service Providers: For website hosting, payment processing, and email marketing</li>
              <li>Legal Authorities: If required to comply with legal obligations</li>
              <li>Business Transfers: In the event of a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">5. Data Retention</h2>
            <p className="text-navy-600">
              We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">6. Your Rights</h2>
            <p className="mb-4">Under applicable data protection laws, you have rights to:</p>
            <ul className="list-disc pl-6 text-navy-600">
              <li>Access: Request a copy of your personal data</li>
              <li>Rectification: Correct inaccurate or incomplete data</li>
              <li>Erasure: Request deletion of your data under certain conditions</li>
              <li>Objection: Opt-out of data processing or direct marketing</li>
              <li>Portability: Request transfer of your data to another provider</li>
            </ul>
            <p className="mt-4 text-navy-600">
              To exercise your rights, contact us at Admin@lsna.org.uk
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">7. Security of Your Data</h2>
            <p className="text-navy-600">
              We implement robust security measures to protect your data. However, no system is entirely secure, and we cannot guarantee absolute security of your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">8. Links to Other Websites</h2>
            <p className="text-navy-600">
              Our website may contain links to third-party sites. We are not responsible for their content, privacy practices, or data collection methods.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">9. Updates to This Policy</h2>
            <p className="text-navy-600">
              We may update this policy periodically. Significant changes will be communicated via the website or email.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-700 mb-4">10. Contact Us</h2>
            <p className="text-navy-600">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>
            <address className="mt-4 not-italic text-navy-600">
              Liverpool School of Neuroscience Acupuncture (LSNA)<br />
              127-131 Picton Road<br />
              Liverpool<br />
              L15 4LG<br />
              Email: Admin@lsna.org.uk
            </address>
          </section>

          <p className="text-navy-600 mt-8">
            This policy complies with UK GDPR and the Data Protection Act 2018.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;