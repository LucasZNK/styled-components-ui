import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button.elements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroSection.elements";
import Video from "../../videos/video.mp4";

const HeroSection = (props) => {
  const [hover, setHover] = useState(false);
  const buttonIcon = hover ? <ArrowFoward /> : <ArrowRight />;
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Lucas Zanek portfolio in progress</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={setHover}
            onMouseLeave={setHover}
            primary="true"
            dark="true"
          >
            Get started <ArrowFoward />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
