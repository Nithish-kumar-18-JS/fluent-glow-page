import React, { useState } from 'react';
import { FileText, Shield, Cookie, ChevronRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

function TermsConditions() {
  const [activeDocument, setActiveDocument] = useState('terms');

  const documents = [
    { id: 'terms', title: 'Terms & Conditions', icon: FileText },
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
              {activeDocument === 'terms' && <TermsAndConditions />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TermsAndConditions() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-gray-600">Last Updated: January 15, 2025</p>
      </div>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using English Tutor AI (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). 
            If you do not agree to these Terms, please do not use our Service. These Terms constitute a legally binding agreement 
            between you and English Tutor AI ("we," "us," or "our").
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or 
            through the Service. Your continued use of the Service after such modifications constitutes your acceptance of the 
            updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            English Tutor AI is an artificial intelligence-powered English learning platform that provides:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Interactive English conversation practice</li>
            <li>Real-time feedback on pronunciation and grammar</li>
            <li>Personalized learning paths and exercises</li>
            <li>Progress tracking and analytics</li>
            <li>Educational content and resources</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Our Service uses advanced AI technology to simulate conversation and provide feedback. However, the AI is not a 
            replacement for human teachers or professional language instruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts & Registration</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed">
              To use our Service, you must create an account by providing accurate and complete information. You are responsible 
              for maintaining the security of your account credentials and for all activities that occur under your account.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800">3.2 Age Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              Users under 18 years of age must have explicit parental or guardian consent before using our Service. Parents or 
              guardians are responsible for supervising their minor child's use of the Service and agree to be bound by these Terms.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800">3.3 Account Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss or 
              damage arising from unauthorized account access.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities & Conduct</h2>
          <p className="text-gray-700 leading-relaxed mb-4">You agree to use the Service responsibly and in compliance with all applicable laws. You will not:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Attempt to interfere with or disrupt the Service's functionality</li>
            <li>Share inappropriate, offensive, or harmful content</li>
            <li>Impersonate others or provide false information</li>
            <li>Attempt to reverse engineer or copy our AI technology</li>
            <li>Use the Service to spam or harass other users</li>
            <li>Violate any intellectual property rights</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate these conduct guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. AI Service Limitations & Disclaimers</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-800 font-medium">Important: Please read this section carefully</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">5.1 AI Technology Limitations</h3>
            <p className="text-gray-700 leading-relaxed">
              Our AI-powered tutoring system is a technological tool designed to assist with English learning. However, you 
              acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>AI responses may contain errors or inaccuracies</li>
              <li>The AI cannot replace qualified human teachers</li>
              <li>Feedback and corrections may not always be perfect</li>
              <li>The AI's understanding is based on patterns in data, not true comprehension</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800">5.2 Educational Disclaimer</h3>
            <p className="text-gray-700 leading-relaxed">
              English Tutor AI is an educational tool only. We make no guarantees about:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Specific learning outcomes or fluency improvements</li>
              <li>Success in examinations or certifications</li>
              <li>Employment or academic opportunities</li>
              <li>The completeness or accuracy of all educational content</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800">5.3 Professional Instruction</h3>
            <p className="text-gray-700 leading-relaxed">
              Our Service is not a substitute for professional language instruction, formal education, or qualified teaching. 
              For comprehensive language learning, we recommend combining our AI tools with traditional learning methods.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">6.1 Platform Content</h3>
            <p className="text-gray-700 leading-relaxed">
              All content provided by English Tutor AI, including but not limited to text, graphics, software, AI models, 
              exercises, and educational materials, is owned by us or our licensors and is protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-medium text-gray-800">6.2 User Submissions</h3>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of any content you submit to the Service (such as voice recordings or written responses). 
              However, you grant us a non-exclusive, royalty-free license to use this content to provide and improve our Service.
            </p>

            <h3 className="text-xl font-medium text-gray-800">6.3 Licensing to Users</h3>
            <p className="text-gray-700 leading-relaxed">
              We grant you a limited, non-transferable license to use our Service for personal, educational purposes only. 
              This license does not permit commercial use or redistribution of our content.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy & Data Protection</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our 
            Privacy Policy, which forms part of these Terms. We are committed to GDPR compliance and protecting your data rights.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our Service, you consent to the collection and use of your data as described in our Privacy Policy. 
            This includes voice recordings and learning data necessary to provide personalized AI tutoring services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payment Terms & Refunds</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">8.1 Subscription Plans</h3>
            <p className="text-gray-700 leading-relaxed">
              We offer various subscription plans with different features and pricing. All prices are clearly displayed 
              before purchase and include applicable taxes where required.
            </p>

            <h3 className="text-xl font-medium text-gray-800">8.2 Payment Processing</h3>
            <p className="text-gray-700 leading-relaxed">
              Payments are processed securely through third-party payment providers. You authorize us to charge your 
              selected payment method for all fees incurred.
            </p>

            <h3 className="text-xl font-medium text-gray-800">8.3 Refund Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              We offer a 30-day money-back guarantee for new subscribers. Refund requests must be submitted within 30 days 
              of initial purchase. Refunds are processed within 5-10 business days to the original payment method.
            </p>

            <h3 className="text-xl font-medium text-gray-800">8.4 Subscription Changes</h3>
            <p className="text-gray-700 leading-relaxed">
              You may upgrade, downgrade, or cancel your subscription at any time through your account settings. Changes 
              take effect at the next billing cycle.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination of Service</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">9.1 Voluntary Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              You may terminate your account at any time by canceling your subscription and deleting your account through 
              the Service settings or by contacting our support team.
            </p>

            <h3 className="text-xl font-medium text-gray-800">9.2 Involuntary Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              We may suspend or terminate your account if you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violate these Terms or our policies</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Cause harm to our Service or other users</li>
              <li>Fail to pay applicable fees</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800">9.3 Effects of Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your access to the Service will cease, and your data may be deleted according to our 
              data retention policies. Some provisions of these Terms will survive termination.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <p className="text-red-800 font-medium">Important Legal Notice</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">10.1 Educational Use Only</h3>
            <p className="text-gray-700 leading-relaxed">
              English Tutor AI is provided for educational purposes only. We make no warranties about the effectiveness 
              of our Service for any particular learning outcome or goal.
            </p>

            <h3 className="text-xl font-medium text-gray-800">10.2 No Guarantees</h3>
            <p className="text-gray-700 leading-relaxed">
              We do not guarantee that our Service will be error-free, uninterrupted, or meet your specific requirements. 
              Your use of the Service is at your own risk.
            </p>

            <h3 className="text-xl font-medium text-gray-800">10.3 Limitation of Damages</h3>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, our liability for any claims arising from your use of the Service 
              shall not exceed the amount you paid us in the twelve months preceding the claim.
            </p>

            <h3 className="text-xl font-medium text-gray-800">10.4 Third-Party Services</h3>
            <p className="text-gray-700 leading-relaxed">
              Our Service may integrate with third-party services. We are not responsible for the availability, accuracy, 
              or content of such third-party services.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law & Dispute Resolution</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">11.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without 
              regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-medium text-gray-800">11.2 Dispute Resolution Process</h3>
            <p className="text-gray-700 leading-relaxed">
              Before initiating legal proceedings, we encourage you to contact our support team to resolve any disputes. 
              Most issues can be resolved through direct communication.
            </p>

            <h3 className="text-xl font-medium text-gray-800">11.3 Arbitration</h3>
            <p className="text-gray-700 leading-relaxed">
              Any disputes that cannot be resolved through negotiation will be settled through binding arbitration in 
              accordance with the rules of [Arbitration Organization].
            </p>

            <h3 className="text-xl font-medium text-gray-800">11.4 Class Action Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to resolve disputes individually and waive your right to participate in class action lawsuits 
              or class-wide arbitration proceedings.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions about these Terms or need to contact us for any reason, please use the following:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> legal@englishtutorai.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Education Street, Learning City, LC 12345</p>
              <p className="text-gray-700"><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM EST</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            We strive to respond to all inquiries within 2 business days. For urgent matters, please call during business hours.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            These Terms and Conditions are effective as of January 15, 2025. English Tutor AI reserves the right to 
            update these terms at any time with notice to users.
          </p>
        </div>
      </div>
    </div>
  );
}


export default TermsConditions;