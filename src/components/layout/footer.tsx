"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { INSTAGRAM_URL, APP_NAME, APP_FOOTER } from '../../lib/constants';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "easeIn", duration: 0.8 }}
      className="max-w-5xl mx-auto py-2"
    >
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {APP_NAME}. {APP_FOOTER}.
        </p>
        <Link 
          href={INSTAGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-4 text-gray-400 hover:text-gray-600 transition self-end"
        >
          <Instagram className="w-5 h-5" />
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;