import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { first, second, fifth } from '../utility/data/Animations';
import { listings } from '../utility/data/Data';
import Card from '../ui/components/Card';
import { DefaultLayout } from '../ui/layouts/DefaultLayout';

export default function About() {
  return (
    <DefaultLayout>
      <div className="flex flex-col">
        <div className="md:w-1/2 flex flex-col items-center">
          <motion.h2
            initial="initial"
            animate="enter"
            variants={first}
            className="font-bold mb-3 text-xl text-gray-200 text-center"
          >
            Recommended for you
          </motion.h2>
          <motion.p
            initial="initial"
            animate="enter"
            variants={second}
            className="mb-6 text-gray-500 text-center"
          >
            Based off your previous searches on our website
          </motion.p>
        </div>

        <div className="md:ml-6 md:w-1/2">
          {listings.map((item) => (
            <motion.div
              initial="initial"
              animate="enter"
              className="md:ml-auto"
              variants={fifth}
            >
              <Card detail={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
