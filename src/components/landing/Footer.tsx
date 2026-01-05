import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
import { Button } from "antd";
import { VNDOLogo } from "@/components/common/VNDOLogo";

export const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Status", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: "solar:telegram-bold", href: "#", label: "Telegram" },
    { icon: "solar:facebook-bold", href: "#", label: "Facebook" },
    { icon: "solar:twitter-bold", href: "#", label: "Twitter" },
    { icon: "solar:linkedin-bold", href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <VNDOLogo size={40} color="#60A5FA" />
              <span className="text-2xl font-bold text-white">VNDO</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              B2B Procurement Marketplace connecting hotels with trusted
              suppliers. Streamline your procurement process with our
              comprehensive platform.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VNDO. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              type="text"
              onClick={() => navigate("/auth")}
              className="text-sm text-gray-400 hover:text-white"
            >
              Sign In
            </Button>
            <span className="text-gray-600">|</span>
            <Button
              type="text"
              onClick={() => navigate("/auth/signup")}
              className="text-sm text-gray-400 hover:text-white"
            >
              Sign Up
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

