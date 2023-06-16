import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pathNames } from "../../routes/pathNames";
import { Box, Stack, Typography } from "@mui/material";
import PasswordEyeClosed from "../../assets/icons/PasswordEyeClosed.svg";
import openEye from "../../assets/icons/openEye.svg";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { loginAction } from "../../redux/Slices/authSlice";
import { useDimensions } from "../../hooks/useDimensions";
import SMInput from "../../common/SMInput";
import SMButton from "../../common/SMButton";
import LoginSignUpFooter from "../../common/LoginSignUpFooter";
import LoginSignUpLayout from "../../common/LoginSignUpLayout";
import "./login.css";

export interface LoginProps {}

const Login = (props: LoginProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { sm } = useDimensions();

  const [passwordTypeAsTest, setPasswordTypeAsText] = useState(false);

  return (
    <Box sx={{ background: "#161616", height: "100vh" }}>
      <Box sx={{ display: "flex", flexDirection: sm ? "column" : "row" }}>
        {!sm && (
          <Box className="login_image_width">
            <LoginSignUpLayout />
          </Box>
        )}
        <Box className="login_form_width">
          <Box
            className={`flex flex-column align-start ${
              sm && "justify-between"
            }`}
            sx={{ height: "100vh", pt: sm ? 3 : 7 }}
          >
            <Box sx={{ width: "100%" }}>
              {sm && (
                <Box
                  component={"img"}
                  src={openEye}
                  alt=""
                  width={"57px"}
                  sx={{
                    margin: "0px auto",
                    display: "block",
                  }}
                />
              )}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#E8E8E8",
                  alignSelf: "start",
                  pb: 2,
                }}
              >
                Login
              </Typography>
              {sm && (
                <Typography
                  className="mont-700"
                  align="left"
                  sx={{
                    fontWeight: 700,
                    fontSize: 26,
                    color: "#E8E8E8",
                    whiteSpace: "nowrap",
                    lineHeight: "2.2rem",
                    paddingBottom: 2,
                  }}
                >
                  Be Friends Forever ❤️
                </Typography>
              )}
              <SMInput
                placeholder="Enter Email"
                label="Enter Email"
                error={"Enter registered email"}
                styles={{
                  paddingLeft: "19px",
                }}
                errorStyles={{
                  marginLeft: 22,
                }}
                inputContainerStyles={{
                  marginBottom: sm ? "17px" : "22px",
                }}
              />
              <SMInput
                placeholder="Enter Password"
                label="Password"
                type={!passwordTypeAsTest ? "password" : "text"}
                inputIcon={passwordTypeAsTest ? openEye : PasswordEyeClosed}
                error={"Please enter correct password"}
                bottomLabel="Forgot Password?"
                iconOnClickAction={() =>
                  setPasswordTypeAsText(!passwordTypeAsTest)
                }
                styles={{
                  paddingLeft: "22px",
                  paddingRight: "53px",
                }}
                inputIconPositioning={{ right: 22, cursor: "pointer" }}
                inputContainerStyles={{
                  marginBottom: sm ? "15px" : "30px",
                }}
                errorStyles={{
                  marginLeft: 22,
                }}
                bottomLabelStyles={{ cursor: "pointer" }}
                //bottomLabelOnClick={() => navigate(pathNames.FORGOT_PASSWORD)}
              />
              <SMButton
                onClick={() => {
                  dispatch(loginAction(true));
                  navigate(pathNames.DASHBOARD);
                }}
                sx={{ padding: "14px 1px" }}
              >
                Login
              </SMButton>
              <Box sx={{ pt: 4 }}>
                <Typography
                  className="mont-400 pointer"
                  onClick={() => navigate(pathNames.REGISTER)}
                  sx={{
                    color: "#0669F8",
                    fontSize: 12,
                    pb: 2,
                  }}
                >
                  Not Having BFF, Sign up
                </Typography>
              </Box>
            </Box>
            {sm && (
              <Box>
                <LoginSignUpFooter />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
