import { Box } from "@mui/material";
import React from "react";
import SMInput from "../../../common/SMInput";
import SMButton from "../../../common/SMButton";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setOpenPostModal } from "../../../redux/Slices/dashboardSlice";

const CreatePost = () => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <SMButton
        onClick={() => {
          dispatch(setOpenPostModal(true));
        }}
      >
        Start a post
      </SMButton>
    </Box>
  );
};

export default CreatePost;
