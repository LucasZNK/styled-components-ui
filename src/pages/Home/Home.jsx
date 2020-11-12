import React, { useState } from 'react';
import {
  Sidebar,
  Navbar,
  HeroSection,
  InfoSection,
  Services,
  Footer,
} from '../../components';
import {
  homeObjOne,
  homeObjTwo,
  homeObjFour,
} from '../../components/InfoSection/Data';
import useToggle from '../../utils/hooks/useToggle';

const Home = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={setIsOpen} />
      <Navbar toggle={setIsOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
