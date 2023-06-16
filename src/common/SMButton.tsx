import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface SMButtonProps {
  onClick?: any;
  sx?: any;
  classes?: any;
  children: React.ReactNode;
  fontWeight?: any;
  btnIcon?: any;
  btnIconOnLeft?: boolean;
  primary?: boolean;
  fullWidth?: boolean;
  variant?: boolean;
  btnIconGap?: any;
  fullHeight?: boolean;
  disabled?: boolean;
}
const SMButton = ({
  onClick,
  sx,
  classes,
  children,
  fontWeight = 500,
  btnIcon,
  btnIconOnLeft = false,
  primary = true,
  fullWidth = true,
  variant,
  btnIconGap = 4,
  fullHeight = false,
  disabled = false,
}: SMButtonProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: fullHeight ? "100%" : "auto",
        display: fullWidth ? "block" : "inline-block",
      }}
    >
      <button
        className={`mont-${fontWeight} ${classes} custom-button`}
        style={{
          width: fullWidth ? "100%" : "auto",
          fontSize: 14,
          height: fullHeight ? "100%" : "auto",
          border: "none",
          outline: "none",
          borderRadius: "4px",
          padding: "10px 15px",
          background: primary ? "#007AFF" : "#5C5C5C",
          color: "#fff",
          gap: btnIconGap,
          display: "flex",
          flexDirection: !btnIconOnLeft ? "row" : "row-reverse",
          justifyContent: "center",
          alignItems: "center",
          cursor: disabled ? "no-drop" : "pointer",
          opacity: disabled ? 0.2 : 1,
          ...sx,
        }}
        disabled={disabled}
        onClick={onClick}
      >
        <span
          style={{
            color: "inherit",
            fontSize: "inherit",
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          {children}
        </span>
        {btnIcon && <Box component={"img"} src={btnIcon} alt="icons" />}
      </button>
    </Box>
  );
};

export default SMButton;
