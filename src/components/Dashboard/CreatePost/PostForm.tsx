import { Box, Typography } from "@mui/material";
import React from "react";
import SMButton from "../../../common/SMButton";
import { setOpenPostModal } from "../../../redux/Slices/dashboardSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const PostForm = () => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Box className="flex align-center" sx={{ gap: 1, mb: 2 }}>
        <Box
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid #fff",
          }}
        >
          <img src={"dp"} alt="p" />
        </Box>
        <Typography>Nikhil</Typography>
      </Box>
      <textarea
        style={{
          minHeight: "200px",
          maxHeight: "300px",
          overflowY: "scroll",
          height: "200px",
          width: "100%",
          padding: "10px",
          paddingBottom: "25px",
          background: "#0C0C0C",
          borderRadius: "10px",
          outline: "none",
          border: "none",
        }}
      ></textarea>
      <Box sx={{ float: "right", mt: 4 }}>
        <SMButton
          sx={{ width: "100px" }}
          onClick={() => dispatch(setOpenPostModal(false))}
        >
          Post
        </SMButton>
      </Box>
    </Box>
  );
};

export default PostForm;
