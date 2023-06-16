import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { useDimensions } from "../hooks/useDimensions";

const LoginSignUpFooter = () => {
  const { sm, md, lg, xl } = useDimensions();

  const login_SignUpFooterImages = [
    {
      name: "Like",
    },
    {
      name: "Share",
    },
    {
      name: "Comment",
    },
    {
      name: "Post",
    },
  ];

  return (
    <Box
      className="flex align-center justify-center"
      sx={{ width: "100%", gap: 6 }}
    >
      {login_SignUpFooterImages.map((item: any, index: number) => (
        <Box
          key={index}
          sx={{
            background: "rgba(0,0,0,0.5)",
            py: 1,
            px: 2,
            borderRadius: "35px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 22,
              color: "#fff",
              //color: index % 2 !== 0 ? "#000" : "#fff",
            }}
          >
            {item?.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LoginSignUpFooter;
