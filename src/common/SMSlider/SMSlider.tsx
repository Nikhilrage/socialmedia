import React from "react";
import { Slider } from "@mui/material";

const SMSlider = (props: any) => {
  return (
    <Slider
      size="medium"
      aria-label="Small"
      value={props.value ? props.value : 0}
      //color="primary"
      sx={{
        color: "#0669F8",
        "& .MuiSlider-thumb": {
          width: "11px",
          height: "11px",
          color: "#0669F8",
          boxShadow: "none",
          "&:before": {
            boxShadow: "0px 0px 0.8px 5px #0080FF60",
          },
        },
        "& .MuiSlider-thumb:hover": {
          boxShadow: "none",
        },
        "& .MuiSlider-rail": {
          color: "#2C2C2C",
        },
      }}
    />
  );
};

export default SMSlider;
