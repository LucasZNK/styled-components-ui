import React, { useState } from "react";
import { Sidebar, Navbar, HeroSection , InfoSection} from "../../components";
import {homeObjOne, homeObjTwo, homeObjThree} from "../../components/InfoSection/Data"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>

    </>
  );
};

export default Home;
