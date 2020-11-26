import React from 'react';
import { motion } from 'framer-motion';

const ChooseCategories = ({ setChooseCategories }: any) => {
  return (
    <motion.div
      initial={{ x: 800, y: 0 }}
      animate={{ x: 0, y: 0 }}
      transition={{
        type: 'tween',
        duration: 2,
        delay: 0,
      }}
      exit="collapsed"
      className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 h-full  pb-5 flex flex-col justify-between"
    >
      <div>
        <div>
          <div className="flex">
            <i
              className={'fas fa-arrow-left mx-3 p-4 text-white'}
              onClick={() => setChooseCategories(false)}
            />
            <motion.h2 className="pt-4 font-bold mb-3 text-xl text-gray-200 text-center w-10/12">
              Choose Categories
            </motion.h2>
          </div>

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
        </div>
      </div>
      <div className="px-10 pt-5">
        <button
          onClick={() => setChooseCategories(true)}
          className="bg-gray-900  w-full text-white rounded"
        >
          Save n go Back
        </button>
      </div>
    </motion.div>
  );
};

export default ChooseCategories;
