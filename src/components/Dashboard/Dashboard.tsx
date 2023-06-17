import React, { useEffect } from "react";
import Layout from "../../common/Layout/Layout";
import { Box } from "@mui/material";
import NewsFeed from "./NewsFeed/NewsFeed";
import CreatePost from "./CreatePost/CreatePost";
import Chat from "./Chat/Chat";
import CustomModal from "../../common/CustomModal/CustomModal";
import { useDimensions } from "../../hooks/useDimensions";
import PostForm from "./CreatePost/PostForm";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setOpenPostModal } from "../../redux/Slices/dashboardSlice";
import { UserInfoCalls } from "../../api/UserInfoCalls.api.";
import { getLocalItem, setLocalItem } from "../../utils/Storage";
import { setProfileDetails } from "../../redux/Slices/profileSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { sm, md, lg, xl } = useDimensions();
  const userId = getLocalItem("userID");

  const showPostModal = useAppSelector(
    ({ dashboard }) => dashboard.openPostModal
  );

  useEffect(() => {
    getProfileID();
  }, []);

  const getProfileID = async () => {
    try {
      const res = await UserInfoCalls.getUserID();
      if (res?.userDetails) {
        setLocalItem("userID", res?.userDetails?.id);
        getProfileDetails(res?.userDetails?.id);
      }
      console.log("res: ", res);
    } catch (e) {
      console.log(e);
    }
  };

  const getProfileDetails = async (id: any) => {
    try {
      const res = await UserInfoCalls.getUserByID(id);
      if (res?.success && res?.userDetails) {
        dispatch(setProfileDetails(res?.userDetails));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <Box
        className="flex height-full"
        sx={{
          width: "100%",
        }}
      >
        <Box className="flex flex-column" sx={{ width: "75%" }}>
          <Box
            sx={{
              mb: 3,
              alignSelf: "center",
              width: "80%",
            }}
          >
            <CreatePost />
          </Box>
          <Box
            sx={{
              height: "100%",
              overflowY: "scroll",
              mx: 3,
              width: "80%",
              alignSelf: "center",
            }}
          >
            <NewsFeed />
          </Box>
        </Box>
        <Box sx={{ width: "25%", position: "sticky", top: 0 }}>
          <Chat />
        </Box>
      </Box>
      <CustomModal
        status={showPostModal}
        onClose={() => dispatch(setOpenPostModal(false))}
        closeButton
        widthInPercent={!xl ? 38 : !lg ? 41 : !md ? 48 : !sm ? 60 : 90}
      >
        <>
          <PostForm />
          {/*<RegisterOtp onClickAction={() => navigate(pathNames.LOGIN)} />*/}
        </>
      </CustomModal>
    </Layout>
  );
};

export default Dashboard;
