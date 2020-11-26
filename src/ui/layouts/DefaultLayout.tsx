import React, { useState } from 'react';
import Router from 'next/router';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { trackPageview } from '../../utility/data/Analytics';
import Filter from '../components/Filter';
import ChooseCategories from '../components/ChooseCategories';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [chooseCategories, setChooseCategories] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header setFilterVisible={setFilterVisible} />
      <main
        onClick={() => setFilterVisible(false)}
        className="flex-1 w-full max-w-6xl p-4 mx-auto md:px-8 md:py-16"
      >
        {props.children}
      </main>
      <Footer />
      {filterVisible && <Filter setChooseCategories={setChooseCategories} />}
      {chooseCategories && (
        <ChooseCategories setChooseCategories={setChooseCategories} />
      )}
    </div>
  );
};
