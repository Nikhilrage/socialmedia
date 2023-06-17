import React, { useEffect, useState } from "react";
import SMInput from "../../common/SMInput";
import { Box, Stack, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SMButton from "../../common/SMButton";
import {
  setOpenProfileEditModal,
  setProfileDetails,
} from "../../redux/Slices/profileSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/reduxHooks";
import { UserInfoCalls } from "../../api/UserInfoCalls.api.";
import axios from "axios";
import { getLocalItem } from "../../utils/Storage";

const EditForm = () => {
  const dispatch = useDispatch();

  const token = getLocalItem("userDetails")?.token;
  const savedProfileDetails = useAppSelector(
    ({ profile }) => profile.profileDetails
  );

  const [uploadedImage, setUploadedImage] = useState<any>();
  const [uploadedImageFileName, setUploadedImageFileName] = useState<any>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  useEffect(() => {
    if (savedProfileDetails) {
      setNumber(savedProfileDetails?.mobile_number);
      setFirstName(savedProfileDetails?.firstName);
      setLastName(savedProfileDetails?.lastName);
    }
  }, [savedProfileDetails]);

  const uploadProfileAvatar = async () => {
    // Assuming you have the file stored in a variable called 'file'

    const formData = new FormData();
    formData.append("profile_avatar", uploadedImage);

    axios
      .post(
        `http://localhost:6001/users/upload/${savedProfileDetails?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Replace with your actual access token
          },
        }
      )
      .then((response) => {
        // Handle success
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const updateUserDetails = async () => {
    try {
      if (uploadedImage) {
        uploadProfileAvatar();
      }
      const payload = { mobile_number: number, firstName, lastName };
      const res = await UserInfoCalls.updatedProfile(
        savedProfileDetails?._id,
        payload
      );
      console.log("res: ", res);
      if (res?.success && res?.updatedUser)
        dispatch(setProfileDetails(res?.updatedUser));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setOpenProfileEditModal(false));
    }
  };

  return (
    <Box>
      <Typography
        textAlign={"center"}
        sx={{
          fontWeight: 500,
          fontSize: 18,
          textDecoration: "underline",
          mb: 2,
        }}
      >
        Edit Your Profile
      </Typography>
      <Typography sx={{ fontSize: 10, color: "#5C5C5C" }}>
        Please Note that Email and Name cannot be modified
      </Typography>
      <Box sx={{ pt: 1, pb: 1 }}>
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
              setUploadedImageFileName(e.target.files[0]?.name);
              setUploadedImage(e.target.files[0]);
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
      </Box>

      <Box sx={{ mt: 5 }}>
        <SMButton onClick={updateUserDetails}>Modify</SMButton>
      </Box>
    </Box>
  );
};

export default EditForm;
