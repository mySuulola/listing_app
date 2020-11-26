import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fifth } from '../../utility/data/Animations';

const Filter = ({ setChooseCategories }: any) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="collapsed"
      variants={fifth}
      className="fixed left-0 right-0 bottom-0 bg-gray-700 h-60 pb-5"
    >
      <div>
        <motion.h2 className="pt-4 font-bold mb-3 text-xl text-gray-200 text-center">
          Advanced Filter
        </motion.h2>

        <div className="px-10 py-2">
          <p className="text-gray-500">Category</p>
          <input id="category" className="w-full rounded" type="select" />
        </div>

        <div className="px-10 py-2">
          <p className="text-gray-500">Sort by</p>
          <input id="sort" className="w-full rounded" type="select" />
        </div>

        <div className="px-10 py-2">
          <p className="text-gray-500">Extra Server Settings</p>
          <small className="text-gray-500">
            Sort from Activity, Regions and amount of @everyone/grouped pings!
          </small>
          <input id="sort" className="w-full rounded" type="select" />
        </div>

        <div className="px-10 pt-5">
          <button
            onClick={() => setChooseCategories(true)}
            className="bg-gray-900  w-full text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Filter;
