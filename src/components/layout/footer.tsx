"use client";

import { motion, useAnimation } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { APP_NAME, APP_FOOTER, SOCIAL_MEDIA_URLS } from "../../lib/constants";
import { useEffect } from "react";

const Footer = () => {
  const socialControls = useAnimation();

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "easeIn",
        duration: 0.8,
      },
    },
  };

  const socialContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      socialControls.start("visible");
    }, 800);

    return () => clearTimeout(timer);
  }, [socialControls]);

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto py-2"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-xs text-gray-400 sm:mb-0">
          © {new Date().getFullYear()} {APP_NAME}. {APP_FOOTER}
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-0 sm:space-x-4"
          variants={socialContainerVariants}
          initial="hidden"
          animate={socialControls}
        >
          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <SocialIcon
              network="instagram"
              url={SOCIAL_MEDIA_URLS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 25, width: 25 }}
            />
          </motion.div>

          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <SocialIcon
              network="youtube"
              url={SOCIAL_MEDIA_URLS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 25, width: 25 }}
            />
          </motion.div>

          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <SocialIcon
              network="tiktok"
              url={SOCIAL_MEDIA_URLS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 25, width: 25 }}
            />
          </motion.div>

          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <SocialIcon
              network="pinterest"
              url={SOCIAL_MEDIA_URLS.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 25, width: 25 }}
            />
          </motion.div>

          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <SocialIcon
              url={SOCIAL_MEDIA_URLS.etsy}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 25, width: 25 }}
            />
          </motion.div>

          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
            <SocialIcon
              network="whatsapp"
              url={SOCIAL_MEDIA_URLS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 25, width: 25 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;