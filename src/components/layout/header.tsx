"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { APP_NAME } from "../../lib/constants";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-5xl mx-auto py-2 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-center">
        <motion.div
          className="flex-shrink-0"
        >
          <Image
            src="/logo-01.png" 
            alt={`${APP_NAME} logo`}
            width={140}
            height={40}
            className="cursor-pointer rounded-sm border border-stone-400"
          />
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;
