"use client";

import { useState } from "react";
import { BadgeCheck, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gridContainerVariants, gridItemVariants } from "../../lib/framer-motion";
import {
  FEATURES,
  GET_ACCESS_BUTTON,
  IMAGE_URL,
  LANDING_HEADER,
  LINK_URL,
} from "../../lib/constants";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row h-full">
            <motion.div
              className="w-full lg:w-1/2 relative h-80 sm:h-96 lg:h-[80vh] order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={IMAGE_URL}
                alt={IMAGE_URL}
                fill
                className="object-cover rounded-md"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="font-marjorie text-4xl lg:text-6xl font-black leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {LANDING_HEADER}
              </motion.h1>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={gridContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-start space-y-2"
                    variants={gridItemVariants}
                  >
                    <BadgeCheck className="w-8 h-8 text-yellow-900" />
                    <p className="font-normal text-sm text-black">
                      {feature.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  onClick={handleSubscribeClick}
                  href={LINK_URL}
                  className="hover:p-3.5 p-3.5 inline-flex items-center text-yellow-900 text-md font-medium underline underline-offset-8 hover:no-underline transition-all duration-300 ease-in-out hover:text-yellow-700 focus:outline-none"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin text-yellow-900" />
                  ) : (
                    <span className="transition-opacity duration-200 ease-in-out">
                      {GET_ACCESS_BUTTON}
                    </span>
                  )}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;