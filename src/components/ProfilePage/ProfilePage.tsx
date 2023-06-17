import React, { useState } from "react";
import Layout from "../../common/Layout/Layout";
import { Box, Typography } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import nft_monkey_1 from "../../assets/images/nft_monkey_1.svg";
import nft_collection_img_2 from "../../assets/images/nft_collection_img_2.svg";
import nft_collection_img_3 from "../../assets/images/nft_collection_img_3.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setOpenProfileEditModal } from "../../redux/Slices/profileSlice";
import CustomModal from "../../common/CustomModal/CustomModal";
import { useDimensions } from "../../hooks/useDimensions";
import EditForm from "./EditForm";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { sm, md, lg, xl } = useDimensions();

  const openProfileEditModal = useAppSelector(
    ({ profile }) => profile.openProfileEditModel
  );
  const savedProfileDetails = useAppSelector(
    ({ profile }) => profile.profileDetails
  );

  const [ownerProfilePage, setOwnerProfilePage] = useState<boolean>(true);

  return (
    <Layout>
      <Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box sx={{ height: "150px", width: "100%", background: "pink" }}>
            <img
              src={nft_collection_img_3}
              alt="profile banner"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                //position: "absolute",
                //zIndex: "99",
                marginTop: "-70px",
                marginBottom: "-60px",
                ml: 4,
                width: "130px",
                height: "130px",
              }}
            >
              <img
                src={savedProfileDetails?.avatar}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                  background: "#5C5C5C",
                }}
              />
            </Box>
            <Box
              className="flex justify-between"
              sx={{
                background: "#2C2C2C",
                height: "200px",
                pt: 10,
                pl: 5,
                pr: 3,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "2.4rem" }}>
                  {`${savedProfileDetails?.firstName} ${savedProfileDetails?.lastName}`}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>
                  {savedProfileDetails?.email}
                </Typography>
                <Typography
                  sx={{ fontWeight: 600, fontSize: 12, color: "#0669F8" }}
                >
                  Connections {savedProfileDetails?.friendConnections.length}
                </Typography>
              </Box>
              <Box>
                {ownerProfilePage ? (
                  <ModeIcon
                    onClick={() => {
                      dispatch(setOpenProfileEditModal(true));
                    }}
                    className="pointer"
                  />
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
      <CustomModal
        status={openProfileEditModal}
        onClose={() => dispatch(setOpenProfileEditModal(true))}
        closeButton
        widthInPercent={!xl ? 38 : !lg ? 41 : !md ? 48 : !sm ? 60 : 90}
      >
        <>
          <EditForm />
        </>
      </CustomModal>
    </Layout>
  );
};

export default ProfilePage;
