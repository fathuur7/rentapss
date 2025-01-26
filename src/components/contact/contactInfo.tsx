import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const ContactFooter = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      link: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-500 hover:bg-pink-50'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      link: 'https://facebook.com/yourusername',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      link: 'https://wa.me/yourphonenumber',
      color: 'hover:text-green-500 hover:bg-green-50'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      link: 'https://github.com/yourusername',
      color: 'hover:text-gray-800 hover:bg-gray-50'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      link: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400 hover:bg-blue-50'
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="text-blue-500" size={24} />,
      title: 'Call Us',
      content: '+1 234 567 890',
      link: 'tel:+1234567890'
    },
    {
      icon: <Mail className="text-red-500" size={24} />,
      title: 'Email Us',
      content: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: <MapPin className="text-green-500" size={24} />,
      title: 'Visit Us',
      content: '123 Business Street, City, Country',
      link: 'https://maps.google.com'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Your Company</h3>
            <p className="text-gray-600 max-w-sm">
              Providing exceptional services and unforgettable experiences. 
              Connect with us to learn more about how we can serve you.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-3 group hover:text-blue-600 transition-colors duration-300"
                >
                  <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{info.title}</p>
                    <p className="text-sm text-gray-600">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-2 rounded-lg bg-gray-50 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-1.5 rounded-full bg-white shadow-sm">
                    {social.icon}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t text-center text-gray-600"
        >
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;