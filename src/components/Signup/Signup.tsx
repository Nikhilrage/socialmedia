import { useState } from "react";
//mui
import { Box, Stack } from "@mui/system";
import { Grid, Typography } from "@mui/material";

//images
import PasswordEyeClosed from "../../assets/icons/PasswordEyeClosed.svg";
import openEye from "../../assets/icons/openEye.svg";

import "./signup.css";
import { pathNames } from "../../routes/pathNames";

//hooks
import { useNavigate } from "react-router";
import { useDimensions } from "../../hooks/useDimensions";

//common comp
import LoginSignUpLayout from "../../common/LoginSignUpLayout";
import SMInput from "../../common/SMInput";
import SMButton from "../../common/SMButton";
import LoginSignUpFooter from "../../common/LoginSignUpFooter";
import SMSlider from "../../common/SMSlider/SMSlider";
import logo from "../../assets/images/logo.png";
//api call
import { AuthCalls } from "../../api/auth.api";

const Register = () => {
  const navigate = useNavigate();
  const { sm } = useDimensions();

  const [showSignUpStep, setShowSignUpStep] = useState(1);
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const registerUser = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Password and confirm password should be same.");
        return;
      }
      const payload = {
        firstName,
        lastName,
        email,
        password,
        mobile_number: number,
      };
      const res = await AuthCalls.registerUser(payload);
      if (res?.success) {
        navigate(pathNames.LOGIN);
      } else {
        alert("Something went wrong!");
      }
    } catch (e) {
      console.log("error in registering the user: ", e);
    }
  };

  return (
    <>
      <Box sx={{ background: "#161616", height: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: sm ? "column" : "row" }}>
          {!sm && (
            <Box className="register_image_width">
              <LoginSignUpLayout />
            </Box>
          )}
          <Box className="register_form_width">
            <Box
              className={`flex flex-column align-start ${
                sm && "justify-between"
              }`}
              sx={{ height: "100vh", pt: sm ? 3 : 7 }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box>
                  {sm && (
                    <Box
                      component={"img"}
                      src={logo}
                      alt=""
                      width={"57px"}
                      sx={{
                        margin: "0px auto",
                        display: "block",
                        pb: "16px",
                      }}
                    />
                  )}
                  <Box
                    className="custom-slider"
                    sx={{
                      pb: 3,
                      display: "flex",
                      flexDirection: sm ? "column-reverse" : "column",
                      gap: sm ? 1 : 2,
                    }}
                  >
                    <SMSlider
                      value={
                        showSignUpStep === 1
                          ? 30
                          : showSignUpStep === 2
                          ? 60
                          : 48
                      }
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 24,
                        color: "#E8E8E8",
                        alignSelf: "start",
                      }}
                    >
                      Signup
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex-grow-1" sx={{ overflow: "hidden" }}>
                  {sm && (
                    <Typography
                      className="mont-700"
                      align="left"
                      sx={{
                        fontWeight: 700,
                        fontSize: 24,
                        color: "#fff",
                        whiteSpace: "nowrap",
                        lineHeight: "2.2rem",
                        paddingBottom: 3,
                      }}
                    >
                      Be Friends Forever
                    </Typography>
                  )}
                  <Box sx={{ width: "100%", height: "100%" }}>
                    {showSignUpStep === 1 ? (
                      <>
                        <SignUpStepOne
                          email={email}
                          setEmail={setEmail}
                          setShowSignUpStep={setShowSignUpStep}
                        />
                      </>
                    ) : showSignUpStep === 2 ? (
                      <SignUpStepTwo
                        firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                        number={number}
                        setNumber={setNumber}
                        setShowSignUpStep={setShowSignUpStep}
                      />
                    ) : (
                      <SignUpStepThree
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        registerUser={registerUser}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
              {sm && (
                <Box sx={{ alignSelf: "center" }}>
                  <LoginSignUpFooter />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;

const SignUpStepOne = (props: any) => {
  const { sm } = useDimensions();

  return (
    <>
      <SMInput
        placeholder="Email ID"
        label="Email ID"
        value={props?.email}
        onChange={(e: any) => props?.setEmail(e.target.value)}
        inputContainerStyles={{
          marginBottom: sm ? "40px" : "35px",
          width: "100%",
        }}
      />

      <SMButton
        onClick={() => props?.setShowSignUpStep(2)}
        sx={{ padding: "13px 1px" }}
      >
        Get Started
      </SMButton>
    </>
  );
};

const SignUpStepTwo = ({
  firstName,
  lastName,
  number,
  setFirstName,
  setLastName,
  setNumber,
  setShowSignUpStep,
}: any) => {
  return (
    <Box>
      <Box className="" sx={{ mb: 2 }}>
        <SMInput
          label="First Name"
          placeholder={"First Name"}
          value={firstName}
          onChange={(e: any) => setFirstName(e.target.value)}
          styles={{ paddingLeft: 17 }}
          inputContainerStyles={{ marginBottom: "10px" }}
        />
        <SMInput
          label="Last Name"
          placeholder={"Last Name"}
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
          styles={{ paddingLeft: 17 }}
          inputContainerStyles={{ marginBottom: "10px" }}
        />
        <SMInput
          label="Mobile Number"
          placeholder={"Mobile Number"}
          value={number}
          onChange={(e: any) => setNumber(e.target.value)}
          styles={{ paddingLeft: 17 }}
          inputContainerStyles={{ marginBottom: "10px" }}
        />
      </Box>
      <SMButton
        sx={{ padding: "13px 1px" }}
        onClick={() => setShowSignUpStep(3)}
      >
        Next
      </SMButton>
    </Box>
  );
};

const SignUpStepThree = (props: any) => {
  const navigate = useNavigate();
  const { sm } = useDimensions();

  return (
    <>
      <Box>
        <SMInput
          label="Create Password"
          placeholder={"Create Password"}
          value={props?.password}
          onChange={(e: any) => props?.setPassword(e.target.value)}
          inputIcon={openEye}
          styles={{ paddingLeft: 17 }}
          inputContainerStyles={{ marginBottom: "10px" }}
        />
      </Box>
      <SMInput
        label="Confirm Password"
        placeholder={"Confirm Password"}
        type={"password"}
        value={props?.confirmPassword}
        onChange={(e: any) => props?.setConfirmPassword(e.target.value)}
        inputIcon={PasswordEyeClosed}
        styles={{ paddingLeft: 17 }}
        inputContainerStyles={{ marginBottom: "13px" }}
      />
      <Box sx={{ paddingTop: "10px" }}>
        <label className="checkbox_signup">
          <div>
            <input type="checkbox" />
            <span className="custom-checkbox"></span>
          </div>
          <div className="checkbox_label">
            <span
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#E8E8E8",
                paddingBottom: 10,
              }}
            >
              Creating an account means you accept our Terms of service Privacy
              Policy.
            </span>
          </div>
        </label>

        <SMButton
          onClick={props?.registerUser}
          sx={{
            width: "100%",
            mt: 2,
            padding: "13px 1px",
          }}
        >
          Confirm
        </SMButton>
      </Box>
    </>
  );
};
