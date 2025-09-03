import React, { useState } from 'react';
import { Shield, Eye, Lock, Users, FileText, Clock, Globe, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const tableOfContents = [
    { id: 'overview', title: '1. Overview', icon: Eye },
    { id: 'information-collected', title: '2. Information We Collect', icon: FileText },
    { id: 'how-we-use', title: '3. How We Use Your Information', icon: Users },
    { id: 'ai-processing', title: '4. AI Processing and Learning', icon: Shield },
    { id: 'data-sharing', title: '5. Data Sharing and Third Parties', icon: Globe },
    { id: 'data-security', title: '6. Data Security and Protection', icon: Lock },
    { id: 'data-retention', title: '7. Data Retention and Deletion', icon: Clock },
    { id: 'minors', title: '8. Special Considerations for Minors', icon: Users },
    { id: 'user-rights', title: '9. Your Privacy Rights', icon: Shield },
    { id: 'cookies', title: '10. Cookies and Tracking', icon: Eye },
    { id: 'updates', title: '11. Policy Updates', icon: FileText },
    { id: 'contact', title: '12. Contact Information', icon: Phone },
  ];

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className=" border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white-400 mr-3" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-slate-300 mb-4">AI English Tutoring Platform</p>
            <p className="text-sm text-slate-400">Effective Date: January 1, 2025</p>
            <p className="text-sm text-slate-400">Last Updated: January 1, 2025</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className=" rounded-xl p-6 border border-slate-700">
                <h2 className="text-lg font-semibold mb-6 text-white-400">Table of Contents</h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                      >
                        <IconComponent className="w-4 h-4 text-white-400 mr-3 group-hover:text-blue-300" />
                        <span className="text-sm text-slate-300 group-hover:text-white">
                          {item.title}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">

              {/* Overview Section */}
              <section id="overview" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Eye className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">1. Overview</h2>
                  </div>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Welcome to our AI English Tutoring Platform. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our AI-powered English learning services.
                    </p>
                    <p>
                      We are committed to protecting your privacy and ensuring transparency about our data practices. This policy covers all interactions with our platform, including your conversations with our AI tutors, progress tracking, and account management.
                    </p>
                    <div className="900/30 border border-blue-700 rounded-lg p-4 mt-6">
                      <p className="text-blue-200 font-medium">
                        Key Principle: We only collect and use data necessary to provide you with the best possible English learning experience while maintaining the highest standards of privacy protection.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collected" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    
                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">2.1 Account Information</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Name and email address</li>
                        <li>Profile picture (optional)</li>
                        <li>Preferred learning language and current proficiency level</li>
                        <li>Learning goals and preferences</li>
                        <li>Account settings and preferences</li>
                      </ul>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">2.2 Learning Activity Data</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Voice recordings of your pronunciation practice sessions</li>
                        <li>Text-based conversations with our AI tutor</li>
                        <li>Lesson completion rates and quiz results</li>
                        <li>Time spent on different learning activities</li>
                        <li>Progress tracking data and achievement milestones</li>
                        <li>Error patterns and areas for improvement</li>
                      </ul>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">2.3 Technical Information</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Device type, browser information, and operating system</li>
                        <li>IP address and general location information</li>
                        <li>Usage patterns and feature interactions</li>
                        <li>Error logs and performance metrics</li>
                        <li>Session duration and frequency of use</li>
                      </ul>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">2.4 Payment Information</h3>
                      <p>
                        Payment processing is handled by secure third-party providers. We do not store complete credit card numbers or sensitive payment information on our servers. We only retain transaction records necessary for account management and customer support.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="how-we-use" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Users className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Educational Services</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Provide personalized AI tutoring sessions</li>
                          <li>Generate customized learning content</li>
                          <li>Track your progress and suggest improvements</li>
                          <li>Deliver real-time pronunciation feedback</li>
                        </ul>
                      </div>
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Platform Improvement</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Enhance AI tutor accuracy and effectiveness</li>
                          <li>Develop new features and learning methods</li>
                          <li>Analyze usage patterns for optimization</li>
                          <li>Conduct research on language learning</li>
                        </ul>
                      </div>
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Communication</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Send progress reports and achievements</li>
                          <li>Provide customer support assistance</li>
                          <li>Share important platform updates</li>
                          <li>Send educational tips and resources</li>
                        </ul>
                      </div>
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Legal Compliance</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Comply with applicable privacy laws</li>
                          <li>Respond to legal requests and investigations</li>
                          <li>Protect against fraud and abuse</li>
                          <li>Enforce our Terms of Service</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* AI Processing and Learning */}
              <section id="ai-processing" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Shield className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">4. AI Processing and Learning</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-300 mb-4">How Our AI Uses Your Data</h3>
                      <p className="mb-4">
                        Our AI tutoring system processes your learning data to provide personalized education experiences. Here's how it works:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Real-time Processing:</strong> Voice recordings are analyzed instantly for pronunciation feedback, then processed data is stored (not the original audio)</li>
                        <li><strong>Pattern Recognition:</strong> Your learning patterns help the AI identify your strengths and areas needing improvement</li>
                        <li><strong>Personalized Content:</strong> Based on your progress, the AI generates customized lessons and exercises</li>
                        <li><strong>Aggregate Learning:</strong> De-identified data helps improve our AI's effectiveness for all users</li>
                      </ul>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">Data Protection in AI Processing</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>All AI processing occurs on secure, encrypted servers</li>
                        <li>Personal identifiers are separated from learning data during processing</li>
                        <li>Raw voice recordings are automatically deleted after processing (within 24 hours)</li>
                        <li>Only processed linguistic features are retained for learning improvement</li>
                        <li>Our AI models cannot reverse-engineer personal information from processed data</li>
                      </ul>
                    </div>

                    <div className="bg-amber-900/30 border border-amber-700 rounded-lg p-4">
                      <p className="text-amber-200">
                        <strong>Important:</strong> You can opt out of contributing to AI improvement at any time while still receiving personalized tutoring services.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Sharing and Third Parties */}
              <section id="data-sharing" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Globe className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">5. Data Sharing and Third Parties</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <div className="bg-green-900/30 border border-green-700 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-300 mb-4">We Do NOT Sell Your Data</h3>
                      <p>
                        We never sell, rent, or trade your personal information to third parties for marketing or commercial purposes.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white-400">When We May Share Information:</h3>
                      
                      <div className=" rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Service Providers</h4>
                        <p className="text-sm">Cloud hosting, payment processing, customer support tools - all bound by strict confidentiality agreements</p>
                      </div>
                      
                      <div className=" rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Legal Requirements</h4>
                        <p className="text-sm">When required by law, court order, or to protect safety and security</p>
                      </div>
                      
                      <div className=" rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Business Transfers</h4>
                        <p className="text-sm">In case of merger or acquisition, with user notification and continued privacy protection</p>
                      </div>
                      
                      <div className=" rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">With Your Consent</h4>
                        <p className="text-sm">Only when you explicitly authorize sharing for specific purposes</p>
                      </div>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">Third-Party Integration Partners</h3>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li><strong>Payment Processors:</strong> Stripe, PayPal (payment information only)</li>
                        <li><strong>Analytics:</strong> Google Analytics (anonymized usage data)</li>
                        <li><strong>Cloud Services:</strong> AWS, Google Cloud (encrypted data storage)</li>
                        <li><strong>Communication:</strong> Email service providers (contact information only)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Security and Protection */}
              <section id="data-security" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Lock className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">6. Data Security and Protection</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <p className="text-lg">
                      We implement industry-leading security measures to protect your personal information and learning data.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Technical Safeguards</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>256-bit SSL/TLS encryption for data transmission</li>
                          <li>AES-256 encryption for data at rest</li>
                          <li>Regular security audits and penetration testing</li>
                          <li>Multi-factor authentication for account access</li>
                          <li>Automated threat detection and response systems</li>
                        </ul>
                      </div>
                      
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Operational Security</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Limited access controls based on job function</li>
                          <li>Regular employee security training</li>
                          <li>Secure development practices and code reviews</li>
                          <li>Physical security for data center facilities</li>
                          <li>Incident response and breach notification procedures</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                      <h3 className="text-red-300 font-semibold mb-2">Security Incident Response</h3>
                      <p className="text-red-200 text-sm">
                        In the unlikely event of a security breach, we will notify affected users within 72 hours and provide detailed information about the incident and protective measures taken.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Retention and Deletion */}
              <section id="data-retention" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">7. Data Retention and Deletion</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <p>
                      We retain your personal information only as long as necessary to provide our services and comply with legal obligations.
                    </p>

                    <div className="space-y-4">
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Retention Periods</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center border-b border-slate-600 pb-2">
                            <span className="font-medium">Raw Voice Recordings</span>
                            <span className="text-blue-300">24 hours maximum</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-600 pb-2">
                            <span className="font-medium">Learning Progress Data</span>
                            <span className="text-blue-300">Duration of account + 2 years</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-600 pb-2">
                            <span className="font-medium">Account Information</span>
                            <span className="text-blue-300">Duration of account + 30 days</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-600 pb-2">
                            <span className="font-medium">Payment Records</span>
                            <span className="text-blue-300">7 years (tax/legal requirements)</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-600 pb-2">
                            <span className="font-medium">Technical Logs</span>
                            <span className="text-blue-300">90 days</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Marketing Communications</span>
                            <span className="text-blue-300">Until unsubscribed + 30 days</span>
                          </div>
                        </div>
                      </div>

                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Data Deletion Process</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Automatic deletion based on retention schedules</li>
                          <li>Secure deletion using industry-standard methods</li>
                          <li>Verification of complete data removal</li>
                          <li>Exception handling for legal hold requirements</li>
                          <li>User-requested deletion processed within 30 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Special Considerations for Minors */}
              <section id="minors" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Users className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">8. Special Considerations for Minors</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <div className="bg-orange-900/30 border border-orange-700 rounded-lg p-6">
                      <h3 className="text-orange-300 font-semibold mb-4">COPPA Compliance</h3>
                      <p className="text-orange-200">
                        We comply with the Children's Online Privacy Protection Act (COPPA) and take special care when handling information from users under 13 years of age.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Children Under 13</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Parental consent required before account creation</li>
                          <li>Limited data collection (education-focused only)</li>
                          <li>No behavioral advertising or profiling</li>
                          <li>Enhanced security and privacy protections</li>
                          <li>Parents can review, modify, or delete child's data</li>
                        </ul>
                      </div>
                      
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Ages 13-17</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Can create accounts with simplified consent process</li>
                          <li>Parents can request access to account information</li>
                          <li>Enhanced privacy settings by default</li>
                          <li>Educational focus maintained in data use</li>
                          <li>No sharing with third parties without consent</li>
                        </ul>
                      </div>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">Parental Rights and Controls</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Review all information collected from your child</li>
                        <li>Consent to collection and use of child's information</li>
                        <li>Refuse further collection or use of child's information</li>
                        <li>Request deletion of child's personal information</li>
                        <li>Set additional privacy restrictions on the account</li>
                      </ul>
                      <div className="mt-4 p-4 900/30 border border-blue-700 rounded">
                        <p className="text-blue-200 text-sm">
                          <strong>Contact for Parental Requests:</strong> parents@englishtutor.ai or call 1-800-PRIVACY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Your Privacy Rights */}
              <section id="user-rights" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Shield className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">9. Your Privacy Rights</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <p>
                      You have comprehensive rights regarding your personal information, regardless of your location. We honor the highest privacy standards globally.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Access and Transparency</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li><strong>Right to Know:</strong> What personal information we collect</li>
                          <li><strong>Right to Access:</strong> Request copies of your data</li>
                          <li><strong>Right to Portability:</strong> Receive your data in a portable format</li>
                          <li><strong>Processing Transparency:</strong> Understand how we use your data</li>
                        </ul>
                      </div>
                      
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Control and Correction</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
                          <li><strong>Right to Deletion:</strong> Request removal of your data</li>
                          <li><strong>Right to Restrict:</strong> Limit how we process your data</li>
                          <li><strong>Right to Object:</strong> Opt out of certain data processing</li>
                        </ul>
                      </div>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">How to Exercise Your Rights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-slate-600/50 rounded-lg">
                          <Mail className="w-8 h-8 text-white-400 mx-auto mb-2" />
                          <h4 className="font-semibold text-white mb-1">Email Request</h4>
                          <p className="text-xs text-slate-300">privacy@englishtutor.ai</p>
                        </div>
                        <div className="text-center p-4 bg-slate-600/50 rounded-lg">
                          <Users className="w-8 h-8 text-white-400 mx-auto mb-2" />
                          <h4 className="font-semibold text-white mb-1">Account Dashboard</h4>
                          <p className="text-xs text-slate-300">Self-service privacy tools</p>
                        </div>
                        <div className="text-center p-4 bg-slate-600/50 rounded-lg">
                          <Phone className="w-8 h-8 text-white-400 mx-auto mb-2" />
                          <h4 className="font-semibold text-white mb-1">Phone Support</h4>
                          <p className="text-xs text-slate-300">1-800-PRIVACY</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mt-4 text-center">
                        Response time: Within 30 days | Verification required for security
                      </p>
                    </div>

                    <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
                      <h3 className="text-purple-300 font-semibold mb-2">Special Rights for EU and California Residents</h3>
                      <p className="text-purple-200 text-sm">
                        Additional rights under GDPR and CCPA including the right to lodge complaints with supervisory authorities and specific disclosures about data sales and sharing (which we don't engage in).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section id="cookies" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Eye className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">10. Cookies and Tracking Technologies</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <p>
                      We use cookies and similar technologies to enhance your learning experience and improve our services.
                    </p>

                    <div className="space-y-4">
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Types of Cookies We Use</h3>
                        <div className="space-y-4">
                          <div className="border-l-4 border-green-500 pl-4">
                            <h4 className="font-semibold text-green-300">Essential Cookies (Required)</h4>
                            <p className="text-sm text-slate-300">Authentication, security, and basic functionality</p>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-4">
                            <h4 className="font-semibold text-blue-300">Performance Cookies (Optional)</h4>
                            <p className="text-sm text-slate-300">Analytics to improve platform performance</p>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-4">
                            <h4 className="font-semibold text-purple-300">Functional Cookies (Optional)</h4>
                            <p className="text-sm text-slate-300">Remember your preferences and settings</p>
                          </div>
                          <div className="border-l-4 border-yellow-500 pl-4">
                            <h4 className="font-semibold text-yellow-300">Targeting Cookies (Optional)</h4>
                            <p className="text-sm text-slate-300">Personalized content and relevant features</p>
                          </div>
                        </div>
                      </div>

                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Managing Your Cookie Preferences</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Use our Cookie Preference Center in your account settings</li>
                          <li>Configure browser settings to block or delete cookies</li>
                          <li>Opt out of Google Analytics tracking</li>
                          <li>Use Do Not Track browser signals (we honor these)</li>
                        </ul>
                        <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-700 rounded">
                          <p className="text-yellow-200 text-sm">
                            <strong>Note:</strong> Disabling essential cookies may limit platform functionality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Updates */}
              <section id="updates" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">11. Policy Updates</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <p>
                      We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors.
                    </p>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">How We Notify You of Changes</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Minor Changes</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Posted on our website</li>
                            <li>Updated "Last Modified" date</li>
                            <li>In-app notification</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Material Changes</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Email notification to all users</li>
                            <li>30-day advance notice</li>
                            <li>Prominent platform announcements</li>
                            <li>Option to opt out or delete account</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="900/30 border border-blue-700 rounded-lg p-4">
                      <p className="text-blue-200">
                        <strong>Your Continued Use:</strong> Using our platform after policy changes means you accept the updated terms. We encourage you to review this policy regularly.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="mb-12">
                <div className=" rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Phone className="w-6 h-6 text-white-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">12. Contact Information</h2>
                  </div>
                  <div className="space-y-6 text-slate-300">
                    <p>
                      We're here to help with any questions or concerns about your privacy and data protection.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Privacy Inquiries</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-white-400 mr-3" />
                            <span>privacy@englishtutor.ai</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-white-400 mr-3" />
                            <span>1-800-PRIVACY (1-800-774-8229)</span>
                          </div>
                          <p className="text-sm text-slate-400 mt-3">
                            Response time: 2-5 business days
                          </p>
                        </div>
                      </div>

                      <div className=" rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white-400 mb-4">Data Protection Officer</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-white-400 mr-3" />
                            <span>dpo@englishtutor.ai</span>
                          </div>
                          <p className="text-sm text-slate-400">
                            For GDPR-related inquiries and formal complaints
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white-400 mb-4">Company Information</h3>
                      <div className="text-sm space-y-2">
                        <p><strong>English Tutor AI Inc.</strong></p>
                        <p>123 Learning Street, Suite 456</p>
                        <p>Education City, EC 12345</p>
                        <p>United States</p>
                        <p className="mt-4 text-slate-400">Registration: Delaware Corporation #12345678</p>
                      </div>
                    </div>

                    <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                      <p className="text-green-200 text-center">
                        <strong>We typically respond to privacy inquiries within 2 business days.</strong><br />
                        <span className="text-sm">For urgent matters, please call our privacy hotline.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="text-center py-8 border-t border-slate-700">
                <p className="text-slate-400 text-sm">
                  This Privacy Policy was last updated on January 1, 2025.<br />
                  © 2025 English Tutor AI Inc. All rights reserved.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;