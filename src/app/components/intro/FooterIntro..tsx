import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function FooterIntro() {
    return (
    <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <motion.div 
                className="flex items-center text-xl font-bold text-yellow-500"
                whileHover={{ scale: 1.05 }}
              >
                <ShoppingBag className="mr-2 w-5 h-5" />
                YourBrand
              </motion.div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-yellow-500"
                whileHover={{ x: 2 }}
              >
                Terms
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-yellow-500"
                whileHover={{ x: 2 }}
              >
                Privacy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-yellow-500"
                whileHover={{ x: 2 }}
              >
                Contact
              </motion.a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500">© 2025 YourBrand</span>
            </div>
          </div>
        </div>
      </motion.footer>
    );
}