import React, { useState } from "react";
import { Sidebar, Navbar, HeroSection , InfoSection, Services} from "../../components";
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
      <Services/>
      <InfoSection {...homeObjThree}/>

    </>
  );
};

export default Home;
