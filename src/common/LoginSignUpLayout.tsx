import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
//import { Logo, bgImg } from "../../constants/Images";
import { useDimensions } from "../hooks/useDimensions";
import LoginSignUpFooter from "./LoginSignUpFooter";
import login_banner from "../assets/images/login_banner.webp";
import bg_banner from "../assets/images/bg_banner.svg";
import logo from "../assets/images/logo.png";

const LoginSignUpLayout = () => {
  const { sm, md, lg } = useDimensions();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom left, rgba(0, 0, 0, 1.1), rgba(0, 0, 0, 0.67)), url(${bg_banner})`,
        backgroundRepeat: "no-repeat",
        //backgroundSize: `${lg ? "contain" : "cover"}`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        className="mont-600 flex justify-center align-center flex-column"
        sx={{
          color: "#fff",
          pl: 7,
          pt: 7,
          pb: 3,
          height: "90%",
        }}
      >
        <Box component={"img"} src={logo} alt="logo" width={160} />
        <Typography
          className="mont-600"
          sx={{
            fontSize: md ? 40 : lg ? 50 : 70,
            color: "#fff",
          }}
          align="center"
        >
          Be Friends Forever ❤️
        </Typography>
      </Box>
      <Box sx={{}}>
        <LoginSignUpFooter />
      </Box>
    </Box>
  );
};

export default LoginSignUpLayout;
