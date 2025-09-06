import { motion } from "framer-motion";
import { MessageCircle, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Integrations", href: "#integrations" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Status", href: "#status" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-conditions" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR", href: "/gdpr" }
    ]
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-glass-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-glow rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                English Tutor AI
              </span>
            </div>
            <p className="text-white mb-6 max-w-sm">
              Transform your English speaking skills with AI-powered conversations, 
              real-time feedback, and personalized learning paths.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#twitter" },
                { icon: Linkedin, href: "#linkedin" },
                { icon: Github, href: "#github" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-glass-border/30"
        >
          <p className="text-white text-sm">
            © 2024 English Tutor AI. All rights reserved.
          </p>
          
          {/* Language Selector */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="glass-panel px-3 py-1 rounded-lg">
              <span className="text-sm text-white">🌐 English</span>
            </div>
            <div className="text-sm text-white">
              Made with ❤️ - Nithish kumar
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;