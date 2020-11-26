import React, { useState } from 'react';
import Link from 'next/link';

export const Header = ({ setFilterVisible }: any) => {
  return (
    <header className="bg-gray-900 border-b border-gray-900">
      <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-bold text-white text-xl">Listing</a>
          </Link>
        </div>
        <div className="flex cursor-pointer 800 items-center px-3 py-2 rounded text-white">
          <i className={'far fa-search mx-3'} />
          <i
            onClick={() => setFilterVisible(true)}
            className={'far fa-bars mx-3'}
          />
        </div>
      </div>
    </header>
  );
};
