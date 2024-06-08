import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import imgLight from "./images/background.jpg";
import imgDark from "./images/background1.jpg";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bgImage = useColorModeValue(imgLight, imgDark); // Selecting appropriate image based on color mode

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.2,
    width: "100%",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={bgImageStyle}></div>
      <IconButton
        variant="ghost"
        color="current"
        pos={"fixed"}
        top={"4"}
        right={"4"}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </div>
  );
};

export default ColorModeSwitcher;
