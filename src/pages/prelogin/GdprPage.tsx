import React, { useState } from 'react';
import { FileText, Shield, Cookie, ChevronRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

function GdprPage() {
  const [activeDocument, setActiveDocument] = useState('gdpr');

  const documents = [
    { id: 'gdpr', title: 'GDPR Compliance', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">AI</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">English Tutor AI</h1>
            </div>
            <div className="text-sm text-gray-500">Legal Documents</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Legal Documents</h2>
              <nav className="space-y-2">
                {documents.map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setActiveDocument(doc.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeDocument === doc.id
                          ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{doc.title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  );
                })}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>legal@englishtutorai.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>123 Education Street<br />Learning City, LC 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm">
              {activeDocument === 'gdpr' && <GDPRCompliance />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function GDPRCompliance() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">GDPR Compliance</h1>
        <p className="text-gray-600">Last Updated: January 15, 2025</p>
      </div>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Our Commitment to GDPR Compliance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            English Tutor AI is committed to protecting your personal data and respecting your privacy rights under the 
            General Data Protection Regulation (GDPR). This page explains how we comply with GDPR principles and how you 
            can exercise your rights as a data subject.
          </p>
          <p className="text-gray-700 leading-relaxed">
            GDPR applies to all individuals in the European Union (EU) and European Economic Area (EEA), regardless of 
            where our company is located. We extend these protections to all our users worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. GDPR Principles Compliance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We adhere to all six GDPR principles in how we handle your personal data:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.1 Lawfulness, Fairness, and Transparency</h3>
              <p className="text-gray-700 leading-relaxed">
                We process your data only when we have a lawful basis (consent, contract, legal obligation, vital interests, 
                public task, or legitimate interest). We are transparent about what data we collect and how we use it.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-4 py-2 bg-green-50">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.2 Purpose Limitation</h3>
              <p className="text-gray-700 leading-relaxed">
                We collect personal data only for specific, explicit, and legitimate purposes related to providing AI-powered 
                English tutoring services. We do not use your data for incompatible purposes.
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-4 py-2 bg-purple-50">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.3 Data Minimization</h3>
              <p className="text-gray-700 leading-relaxed">
                We collect only the personal data that is necessary for our specified purposes. We avoid collecting 
                excessive or irrelevant information about our users.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.4 Accuracy</h3>
              <p className="text-gray-700 leading-relaxed">
                We take steps to ensure personal data is accurate and up-to-date. You can update your information at any 
                time through your account settings or by contacting us.
              </p>
            </div>

            <div className="border-l-4 border-red-400 pl-4 py-2 bg-red-50">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.5 Storage Limitation</h3>
              <p className="text-gray-700 leading-relaxed">
                We keep personal data only as long as necessary for the purposes it was collected or as required by law. 
                We have clear data retention policies and regularly review stored data.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-4 py-2 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.6 Integrity and Confidentiality (Security)</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50">
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.7 Accountability</h3>
              <p className="text-gray-700 leading-relaxed">
                We can demonstrate our compliance with GDPR principles through documentation, policies, and regular 
                audits of our data processing activities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Your GDPR Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under GDPR, you have several important rights regarding your personal data. You can exercise these rights 
            at any time by contacting us:
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Right of Access
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                You can request a copy of all personal data we hold about you, including information about how we process it.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Right of Rectification
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                You can request correction of inaccurate or incomplete personal data. You can also update most information 
                directly through your account settings.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Right of Erasure ("Right to be Forgotten")
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                You can request deletion of your personal data in certain circumstances, such as when the data is no 
                longer necessary for the original purpose.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Right to Data Portability
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                You can request a copy of your personal data in a structured, machine-readable format and transfer it 
                to another service provider.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Right to Restrict Processing
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                You can request that we limit how we process your personal data in certain situations, such as when you 
                contest the accuracy of the data.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <span className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Right to Object
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                You can object to processing based on legitimate interest or for direct marketing purposes. We will stop 
                processing unless we have compelling legitimate grounds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                <span className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Right to Lodge a Complaint
              </h3>
              <p className="text-gray-700 leading-relaxed ml-11">
                You can file a complaint with your local data protection authority if you believe we have not handled 
                your personal data appropriately.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How to Exercise Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To exercise any of your GDPR rights, please contact us using the information provided at the bottom of this page. 
            When contacting us, please:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Clearly state which right you wish to exercise</li>
            <li>Provide sufficient information to identify you (for security purposes)</li>
            <li>Specify what data the request relates to (if applicable)</li>
            <li>Include any relevant details about your request</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800">
              <strong>Response Time:</strong> We will respond to your request within one month. In complex cases, we may 
              extend this by two additional months, and we will inform you if this is necessary.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We retain personal data only as long as necessary for the purposes outlined in our Privacy Policy or as 
            required by applicable laws:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Account Information</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Until account deletion</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Service provision</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Learning Data</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">3 years after last activity</td>
                  <td className="px-6 py-4 text-sm text-gray-700">AI improvement, progress tracking</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Voice Recordings</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1 year or until deletion request</td>
                  <td className="px-6 py-4 text-sm text-gray-700">AI training, feedback provision</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Payment Information</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">7 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Legal/tax requirements</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Marketing Data</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Until consent withdrawn</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Marketing communications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Data Processors</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We work with carefully selected third-party processors to provide our service. All processors are bound by 
            GDPR-compliant data processing agreements:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Cloud Infrastructure</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AWS (Amazon Web Services)</li>
                <li>• Google Cloud Platform</li>
                <li>• Microsoft Azure</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Analytics & Support</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Google Analytics</li>
                <li>• Customer support platforms</li>
                <li>• Email service providers</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Payment Processing</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Stripe</li>
                <li>• PayPal</li>
                <li>• Other secure payment gateways</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">AI & Machine Learning</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• OpenAI</li>
                <li>• Google AI Platform</li>
                <li>• Speech recognition services</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Data Transfers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some of our service providers are located outside the EU/EEA. When we transfer your personal data internationally, 
            we ensure appropriate safeguards are in place:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate data protection as determined by the European Commission</li>
            <li><strong>Standard Contractual Clauses (SCCs):</strong> Legally binding contracts that provide EU-level protection</li>
            <li><strong>Certification Schemes:</strong> Providers certified under approved international data protection frameworks</li>
            <li><strong>Binding Corporate Rules:</strong> For multinational companies with internal data protection rules</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            You can request details about specific safeguards used for any international transfer of your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Security Measures</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement comprehensive security measures to protect your personal data:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Technical Measures</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• End-to-end encryption for sensitive data</li>
                <li>• Secure HTTPS connections</li>
                <li>• Regular security audits and testing</li>
                <li>• Automated backup systems</li>
                <li>• Multi-factor authentication</li>
                <li>• Intrusion detection systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Organizational Measures</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Staff training on data protection</li>
                <li>• Access controls and authorization</li>
                <li>• Data breach response procedures</li>
                <li>• Regular policy reviews and updates</li>
                <li>• Vendor security assessments</li>
                <li>• Incident response team</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Breach Notification</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the unlikely event of a data breach that affects your personal data:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-gray-700">We will notify the relevant supervisory authority within 72 hours of becoming aware of the breach</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-gray-700">If the breach is likely to result in high risk to your rights and freedoms, we will notify you directly</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-gray-700">We will provide information about the nature of the breach and steps being taken to address it</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <p className="text-gray-700">We will document all breaches and make records available to supervisory authorities</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Data Protection Officer (DPO) Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Data Protection Officer is responsible for overseeing our GDPR compliance efforts and serving as your 
            primary contact for data protection matters:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-700">dpo@englishtutorai.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-700">+1 (555) 123-4567 ext. 101</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-700">Data Protection Officer<br/>English Tutor AI<br/>123 Education Street<br/>Learning City, LC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-800">Office Hours</p>
                  <p className="text-gray-700">Monday-Friday, 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Supervisory Authority</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are not satisfied with our response to your data protection concerns, you have the right to lodge a 
            complaint with the relevant supervisory authority in your country. Some key authorities include:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">European Authorities</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• ICO (UK): ico.org.uk</li>
                <li>• CNIL (France): cnil.fr</li>
                <li>• BfDI (Germany): bfdi.bund.de</li>
                <li>• EDPB: edpb.europa.eu</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Contact Methods</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Online complaint forms</li>
                <li>• Phone hotlines</li>
                <li>• Email addresses</li>
                <li>• Physical offices</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Updates to GDPR Compliance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We regularly review and update our GDPR compliance measures to ensure we maintain the highest standards 
            of data protection. We will notify you of any significant changes that affect your rights or how we process 
            your personal data.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This GDPR compliance page is reviewed quarterly and updated as needed to reflect changes in our practices, 
            legal requirements, or regulatory guidance.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            This GDPR Compliance page is effective as of January 15, 2025. English Tutor AI is committed to protecting 
            your personal data and respecting your privacy rights under GDPR and other applicable data protection laws.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GdprPage;