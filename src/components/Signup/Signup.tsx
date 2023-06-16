import { useState } from "react";
//mui
import { Box, Stack } from "@mui/system";
import { Grid, Typography } from "@mui/material";

//images
import PasswordEyeClosed from "../../assets/icons/PasswordEyeClosed.svg";
import openEye from "../../assets/icons/openEye.svg";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";

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
import CustomModal from "../../common/CustomModal/CustomModal";
import SMSlider from "../../common/SMSlider/SMSlider";

export interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const navigate = useNavigate();
  const { sm, md, lg, xl } = useDimensions();

  const [showSignUpStepTwo, setShowSignUpStepTwo] = useState(false);
  const [openOTPModal, setOpenOtpModal] = useState(false);
  const [openCropModal, setOpenCropModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState();
  const [uploadedImageFileName, setUploadedImageFileName] = useState<any>();

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
                      src={"Logo"}
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
                    <SMSlider value={showSignUpStepTwo ? 80 : 18} />
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
                      One dashboard <br /> for all offers & NFTs
                    </Typography>
                  )}
                  <Box sx={{ width: "100%", height: "100%" }}>
                    {showSignUpStepTwo ? (
                      <>
                        <SignUpStepTwo
                          setOpenCropModal={setOpenCropModal}
                          setUploadedImage={setUploadedImage}
                          setOpenOtpModal={setOpenOtpModal}
                          setShowSignUpStepTwo={setShowSignUpStepTwo}
                          uploadedImageFileName={uploadedImageFileName}
                          setUploadedImageFileName={setUploadedImageFileName}
                        />
                      </>
                    ) : (
                      <SignUpStepOne
                        setShowSignUpStepTwo={setShowSignUpStepTwo}
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
      <CustomModal
        status={openOTPModal}
        onClose={() => setOpenOtpModal(false)}
        closeButton
        widthInPercent={!xl ? 38 : !lg ? 41 : !md ? 48 : !sm ? 60 : 90}
      >
        <>
          otp
          {/*<RegisterOtp onClickAction={() => navigate(pathNames.LOGIN)} />*/}
        </>
      </CustomModal>
      {/*<CustomModal
        status={openCropModal}
        onClose={() => setOpenCropModal(false)}
        padding={false}
        widthInPercent={!xl ? 38 : !lg ? 48 : !md ? 70 : !sm ? 85 : 100}
      >
        <CropImage
          uploadedImage={uploadedImage}
          setOpenCropModal={setOpenCropModal}
          setUploadedImageFileName={setUploadedImageFileName}
          setUploadedImage={setUploadedImage}
        />
      </CustomModal>*/}
    </>
  );
};

export default Register;

const SignUpStepOne = (props: any) => {
  const { sm, md, lg, xl } = useDimensions();

  return (
    <>
      <SMInput
        placeholder="Email ID"
        label="Email ID"
        errorStyles={{ paddingLeft: "14px" }}
        inputContainerStyles={{
          marginBottom: sm ? "40px" : "35px",
          width: "100%",
        }}
        error="Email is not valid, Please Enter a valid email."
      />
      <SMButton
        onClick={() => props.setShowSignUpStepTwo(true)}
        sx={{ padding: "20px 1px" }}
      >
        Get Started
      </SMButton>
    </>
  );
};

const SignUpStepTwo = ({
  setOpenCropModal,
  setUploadedImage,
  setOpenOtpModal,
  setShowSignUpStepTwo,
  uploadedImageFileName,
  setUploadedImageFileName,
}: any) => {
  const { sm, md, lg, xl } = useDimensions();
  const [anchorEl, setAnchorEl] = useState<any>(null);

  return (
    <Box
      className="signUpStepTwo"
      sx={{
        height: sm ? "80%" : "100%",
      }}
    >
      <Box className="form_overflow" sx={{ flexGrow: 1 }}>
        <SMInput
          label="Your Name"
          placeholder={"Your Name"}
          styles={{ paddingLeft: 17 }}
          inputContainerStyles={{ marginBottom: "10px" }}
          errorStyles={{ paddingLeft: "10px" }}
        />
        <Box sx={{ pt: 1, pb: 2 }}>
          <Box className="file_upload_box" sx={{}}>
            <Box className="overlay_file_upload_content">
              <span
                className="mont-400"
                style={{ fontSize: 12, color: "#E8E8E8" }}
              >
                {uploadedImageFileName
                  ? uploadedImageFileName
                  : "Your Profile picture"}
              </span>
              <Box sx={{ width: "30px" }}>
                {!uploadedImageFileName ? (
                  <FileUploadOutlinedIcon />
                ) : (
                  <CheckCircleOutlinedIcon />
                )}
              </Box>
            </Box>
            <input
              type="file"
              className="file_upload"
              accept=".png, .jpg, .jpeg"
              onChange={(e: any) => {
                setOpenCropModal(true);
                setUploadedImageFileName(e.target.files[0]?.name);
                setUploadedImage(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </Box>
          <Stack
            flexDirection="row"
            justifyContent={"space-between"}
            sx={{ mt: "6px" }}
          >
            <Typography
              className="mont-400"
              sx={{
                fontSize: 10,
                color: "#5C5C5C",
                pr: 2,
                pl: "19px",
              }}
            >
              File Format: JPG, JPEG 2000, PNG{" "}
            </Typography>
            <Typography
              className="mont-400"
              sx={{ fontSize: 10, color: "#5C5C5C" }}
            >
              File Limit: 10 MB
            </Typography>
          </Stack>
        </Box>
        <Box>
          <SMInput
            label="Create Password"
            placeholder={"Create Password"}
            inputIcon={openEye}
            styles={{ paddingLeft: 17 }}
            inputContainerStyles={{ marginBottom: "10px" }}
            errorStyles={{ paddingLeft: "10px" }}
          />
          <Grid container columns={12} sx={{ marginBottom: 1 }}>
            {passwordCheckConditions.map((item: any, index: number) => (
              <Grid item xs={6} sm={6} md={4} xl={4} sx={{ pr: 2 }}>
                <Stack
                  key={index}
                  flexDirection={"row"}
                  alignItems="center"
                  sx={{ pr: 2, pb: 2 }}
                >
                  <Box sx={{ width: "18px" }}>
                    {item.status === null ? (
                      <CircleOutlinedIcon />
                    ) : !item.status ? (
                      <CircleTwoToneIcon />
                    ) : (
                      <RadioButtonCheckedTwoToneIcon />
                    )}
                  </Box>
                  <Typography
                    className="mont-400"
                    sx={{
                      fontSize: { xs: 10, lg: 12 },
                      whiteSpace: "nowrap",
                      paddingLeft: "4px",
                      color: !item.status ? "#5C5C5C" : "#E8E8E8",
                      pl: "7px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
        <SMInput
          label="Confirm Password"
          placeholder={"Confirm Password"}
          type={"password"}
          inputIcon={PasswordEyeClosed}
          styles={{ paddingLeft: 17 }}
          inputContainerStyles={{ marginBottom: "13px" }}
          errorStyles={{ paddingLeft: "10px" }}
        />
      </Box>

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
              }}
            >
              Creating an account means you accept our{" "}
              <a
                href=" "
                style={{
                  color: "#0669F8",
                  textDecoration: "underline",
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                Terms of service
              </a>{" "}
              and{" "}
              <a
                href=" "
                style={{
                  color: "#0669F8",
                  textDecoration: "underline",
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                Privacy Policy.
              </a>
            </span>
          </div>
        </label>

        <SMButton
          onClick={() => {
            setOpenOtpModal(true);
          }}
          sx={{
            width: "100%",
            padding: sm ? "15px 1px" : "17px 1px",
            mt: 2,
            py: 1,
          }}
        >
          Confirm
        </SMButton>
        <a
          href="https:app.getsafle.com/signup"
          className="mont-400"
          target="blank"
          rel="noreferrer"
        >
          <span
            style={{
              color: "#0669F8",
              fontSize: 12,
              textDecoration: "underline",
              textAlign: "center",
              width: "100%",
              display: "block",
              marginTop: "20px",
            }}
          >
            Don’t have a SafleID yet? Get one here
          </span>
        </a>
      </Box>
    </Box>
  );
};

const passwordCheckConditions = [
  {
    label: "one lowercase",
    status: null,
  },
  {
    label: "one uppercase",
    status: false,
  },
  {
    label: "one number",
    status: true,
  },
  {
    label: "8 characters minimum",
    status: null,
  },
];
