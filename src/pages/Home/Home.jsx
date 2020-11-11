import React, { useState } from "react";
import {
  Sidebar,
  Navbar,
  HeroSection,
  InfoSection,
  Services,
} from "../../components";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../../components/InfoSection/Data";
import useToggle from "../../utils/hooks/useToggle";

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
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
