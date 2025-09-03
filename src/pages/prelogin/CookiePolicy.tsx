import React, { useState } from 'react';
import { FileText, Shield, Cookie, ChevronRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

function CookiePolicyPage() {
  const [activeDocument, setActiveDocument] = useState('cookie');

  const documents = [
    { id: 'cookie', title: 'Cookie Policy', icon: Cookie },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
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
              {activeDocument === 'cookie' && <CookiePolicy />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function CookiePolicy() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-gray-600">Last Updated: January 15, 2025</p>
      </div>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit 
            our website. They help us recognize your device and remember information about your preferences or past actions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cookies are widely used to make websites work more efficiently and to provide information to website owners. 
            They cannot harm your device or files, and they cannot access other information on your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Why We Use Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">English Tutor AI uses cookies to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Keep you signed in to your account</li>
            <li>Remember your learning preferences and progress</li>
            <li>Personalize your AI tutoring experience</li>
            <li>Analyze how our website and service are used</li>
            <li>Improve our platform's performance and functionality</li>
            <li>Provide relevant content and features</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Without certain cookies, our Service may not function properly or provide the personalized learning experience 
            you expect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-4 py-2 bg-green-50">
              <h3 className="text-xl font-medium text-gray-800 mb-2">3.1 Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies are necessary for our website to function properly. They enable core functionality such as 
                security, authentication, and load balancing.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Examples:</strong> Session cookies, authentication tokens, security preferences<br/>
                <strong>Duration:</strong> Session or up to 1 year<br/>
                <strong>Can be disabled:</strong> No (required for service functionality)
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50">
              <h3 className="text-xl font-medium text-gray-800 mb-2">3.2 Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies help us understand how visitors interact with our website and AI tutoring platform. We use 
                this information to improve our service and user experience.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Examples:</strong> Google Analytics, usage tracking, performance monitoring<br/>
                <strong>Duration:</strong> Up to 2 years<br/>
                <strong>Can be disabled:</strong> Yes
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-4 py-2 bg-purple-50">
              <h3 className="text-xl font-medium text-gray-800 mb-2">3.3 Functionality Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies remember your preferences and choices to provide a more personalized experience, such as 
                your language settings, learning goals, and AI tutor preferences.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Examples:</strong> Language preferences, learning settings, theme choices<br/>
                <strong>Duration:</strong> Up to 1 year<br/>
                <strong>Can be disabled:</strong> Yes (but may impact personalization)
              </p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50">
              <h3 className="text-xl font-medium text-gray-800 mb-2">3.4 Advertising Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                We may use these cookies to deliver relevant advertisements and measure the effectiveness of advertising 
                campaigns. These cookies track your browsing habits across different websites.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Examples:</strong> Google Ads, Facebook Pixel, remarketing cookies<br/>
                <strong>Duration:</strong> Up to 2 years<br/>
                <strong>Can be disabled:</strong> Yes
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some cookies on our site are set by third-party services that we use to enhance your experience:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> Helps us understand website traffic and user behavior</li>
              <li><strong>Google Ads:</strong> Used for advertising and remarketing purposes</li>
              <li><strong>Payment Processors:</strong> Secure payment processing for subscriptions</li>
              <li><strong>Social Media Plugins:</strong> Enable sharing on social platforms</li>
              <li><strong>Support Chat:</strong> Live chat functionality for customer support</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            These third parties have their own privacy policies and cookie practices, which we encourage you to review.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">5.1 Cookie Settings</h3>
            <p className="text-gray-700 leading-relaxed">
              You can manage your cookie preferences through our cookie settings panel, which appears when you first 
              visit our website. You can also access these settings at any time through your account preferences.
            </p>

            <h3 className="text-xl font-medium text-gray-800">5.2 Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete existing cookies</li>
              <li>Set your browser to ask before accepting cookies</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800">
                <strong>Important:</strong> Blocking or deleting cookies may affect your ability to use certain features 
                of our Service and may impact the quality of your personalized learning experience.
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-800 mt-6">5.3 Browser-Specific Instructions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-800">Google Chrome</h4>
                <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-800">Firefox</h4>
                <p className="text-sm text-gray-600">Settings → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-800">Safari</h4>
                <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-800">Edge</h4>
                <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. GDPR and ePrivacy Directive Compliance</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">6.1 Consent</h3>
            <p className="text-gray-700 leading-relaxed">
              In accordance with GDPR and ePrivacy regulations, we obtain your consent before placing non-essential 
              cookies on your device. You can withdraw this consent at any time through our cookie settings.
            </p>

            <h3 className="text-xl font-medium text-gray-800">6.2 Your Rights</h3>
            <p className="text-gray-700 leading-relaxed">Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Know what cookies we use and why</li>
              <li>Give or withdraw consent for non-essential cookies</li>
              <li>Access information about how your data is processed</li>
              <li>Request deletion of your data</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800">6.3 Data Processing Basis</h3>
            <p className="text-gray-700 leading-relaxed">
              We process cookie data based on your consent (for non-essential cookies) or legitimate interest 
              (for essential cookies needed to provide our service).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookie Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Different cookies have different retention periods:
          </p>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-700">Session Cookies</span>
              <span className="text-sm text-gray-600">Deleted when you close your browser</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-700">Persistent Cookies</span>
              <span className="text-sm text-gray-600">30 days to 2 years (as specified)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-700">Analytics Cookies</span>
              <span className="text-sm text-gray-600">Up to 2 years</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-700">Advertising Cookies</span>
              <span className="text-sm text-gray-600">Up to 2 years</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, 
            or our practices. We will notify you of any significant changes by:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Posting the updated policy on our website</li>
            <li>Sending you an email notification</li>
            <li>Showing a notification in our Service</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We recommend reviewing this policy periodically to stay informed about our cookie practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us About Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> privacy@englishtutorai.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Education Street, Learning City, LC 12345</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our privacy team will respond to cookie-related inquiries within 2 business days.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            This Cookie Policy is effective as of January 15, 2025 and applies to all users of English Tutor AI.
          </p>
        </div>
      </div>
    </div>
  );
}


export default CookiePolicyPage;