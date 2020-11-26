import React from 'react';
import { motion } from 'framer-motion';
import { second } from '../../utility/data/Animations';

const Card = (props: any) => {
  const { name, serverCount, votesCount, description, tags } = props.detail;
  return (
    <div className="bg-gray-900 mb-3 mx-3 pt-3 rounded">
      <div className="px-3">
        <div className="flex justify-start">
          <img
            src="https://i.pinimg.com/236x/dc/f6/b9/dcf6b9e53927a1eeebcf2e91118c5cc5--anime-neko-anime-art.jpg"
            alt="anime display"
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <div className="mx-3">
            <h5 className="text-white small_font">{name}</h5>
            <div className="flex justify-start mb-1">
              <img
                src="https://www.colourbox.com/preview/28494936-dog-paw-with-heart-outline-icon.jpg"
                style={{ width: 20, height: 20 }}
                alt="trophy"
              />
              <p className="mx-3 text-gray-500 mb-0 small_font">
                {' '}
                {serverCount} servers
              </p>
            </div>
            <div className="flex justify-start">
              <img
                src="https://www.colourbox.com/preview/28494936-dog-paw-with-heart-outline-icon.jpg"
                style={{ width: 20, height: 20 }}
                alt="trophy"
              />
              <p className="mx-3 text-gray-500 mb-0 small_font">
                {votesCount} votes
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center"> */}
        <motion.p
          initial="initial"
          animate="enter"
          variants={second}
          className="w-2/3 mb-6 text-gray-500 text-justify mt-2"
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap">
          {tags.map((item: string) => (
            <p className="px-2 mx-2 bg-blue-900 text-gray-500 rounded text-sm">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex w-100">
        <button className="w-1/2 border-2 text-white text-center mt-5">
          View Bot
        </button>
        <button className="w-1/2 border-2 text-white text-center mt-5">
          Quick Invite
        </button>
      </div>
    </div>
  );
};

export default Card;
