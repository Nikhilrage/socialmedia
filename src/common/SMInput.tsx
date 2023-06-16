import { Box } from "@mui/material";
import React from "react";
interface SMInputProps {
  type?: string;
  onChange?: any;
  label?: string;
  placeholder?: string;
  styles?: any;
  classes?: any;
  inputIcon?: any;
  iconToLeft?: boolean;
  error?: string;
  errorStyles?: any;
  bottomLabel?: string;
  bottomLabelStyles?: any;
  inputContainerStyles?: any;
  bottomLabelOnClick?: any;
  height?: number;
  mt?: boolean;
  value?: any;
  labelColor?: any;
  disabled?: boolean;
  inputIconPositioning?: any;
  dark?: boolean;
  iconOnClickAction?: any;
}
const SMInput = ({
  type = "text",
  onChange,
  label,
  placeholder,
  styles,
  classes,
  inputIcon,
  error,
  errorStyles,
  bottomLabel,
  bottomLabelStyles,
  inputContainerStyles,
  bottomLabelOnClick,
  height = 53,
  mt = true,
  value,
  labelColor = "#E8E8E8",
  disabled = false,
  inputIconPositioning,
  dark = true,
  iconOnClickAction,
}: SMInputProps) => {
  return (
    <Box
      className={`${classes}`}
      sx={{ position: "relative", ...inputContainerStyles }}
    >
      <Box>
        {label && (
          <label
            className="mont-400"
            style={{ color: labelColor, fontSize: 12 }}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          style={{
            height: height,
            width: "100%",
            outline: "none",
            border: error ? "1px solid #EB5757" : "none",
            background: dark ? "#0C0C0C" : "#161616",
            color: "#E8E8E8",
            marginTop: mt ? 3 : "unset",
            display: "flex",
            paddingLeft: "20px",
            borderRadius: "4px",
            ...styles,
          }}
        />
        {(error || bottomLabel) && (
          <Box
            className="flex align-center justify-between"
            sx={{ pt: "5px", flexWrap: "nowrap" }}
          >
            <span
              className="mont-400"
              style={{
                fontSize: "10px",
                color: "#EB5757",
                textAlign: "start",
                marginLeft: "10px",
                ...errorStyles,
              }}
            >
              {error}
            </span>
            <span
              className="mont-400"
              onClick={bottomLabelOnClick}
              style={{
                fontSize: "12px",
                textAlign: "end",
                ...bottomLabelStyles,
              }}
            >
              {bottomLabel}
            </span>
          </Box>
        )}
      </Box>
      {inputIcon && (
        <Box
          onClick={iconOnClickAction}
          sx={{
            position: "absolute",
            right: 10,
            top: label ? 42 : "50%",
            transform: label ? "none" : "translateY(-40%)",
            ...inputIconPositioning,
          }}
        >
          <img src={inputIcon} alt="icons" />
        </Box>
      )}
    </Box>
  );
};

export default SMInput;
