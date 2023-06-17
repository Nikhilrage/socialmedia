import { Box } from "@mui/system";

//import MenuButton from "./MenuButton";
import { useNavigate } from "react-router-dom";
import { useDimensions } from "../../hooks/useDimensions";
//import { Arrow, Flower, LogoutIcon } from "../../constants/Images";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { pathNames } from "../../routes/pathNames";
import { loginAction, logoutAction } from "../../redux/Slices/authSlice";
import SMButton from "../SMButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";

export interface SidebarProps {
  setExpand: any;
  expand: boolean;
  menus: any;
}

const Sidebar = (props: SidebarProps) => {
  const dispatch = useAppDispatch();
  const { sm } = useDimensions();
  const navigate = useNavigate();
  return (
    <>
      <Box
        className="height-full scroll-menu"
        sx={{
          width: sm && props?.expand ? "100%" : props?.expand ? 250 : "auto",
          backgroundColor: "#161616",
        }}
      >
        <Box className="flex flex-column height-full">
          <Box className="flex-grow-1">
            <Box sx={{ padding: props?.expand || sm ? "25px" : "25px 10px" }}>
              <Box
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={"Flower"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "50%",
                  }}
                  alt="User"
                />
              </Box>
              {(props?.expand || sm) && (
                <>
                  <Box className="mont-600" sx={{ fontSize: "16px", mt: 1.5 }}>
                    Nikhil
                  </Box>
                  <Box sx={{ fontSize: "12px" }}>Friends 36</Box>
                </>
              )}
            </Box>
            <Box className="relative">
              <Box sx={{ border: "1px solid #2C2C2C" }}></Box>
              {!sm && (
                <Box
                  sx={{
                    position: "absolute",
                    right: props?.expand ? "0px" : "50%",
                    top: "50%",
                    transform: props?.expand
                      ? "translateY(-43%)"
                      : "translate(50%, -43%)",
                    padding: props?.expand ? "0px 10px" : "0px",
                    backgroundColor: "#161616",
                  }}
                >
                  <ArrowBackIosIcon
                    sx={{
                      cursor: "pointer",
                      transform: props?.expand
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                    }}
                    onClick={() => props?.setExpand(!props?.expand)}
                  />
                </Box>
              )}
            </Box>
            <Box sx={{ paddingTop: "30px" }}>
              <Box
                className={`pointer flex flex-column ${
                  !props?.expand && "align-center"
                }`}
                sx={{ mb: 3 }}
                onClick={() => navigate(pathNames.DASHBOARD)}
              >
                {!props?.expand ? <HomeIcon /> : <SMButton>Home</SMButton>}
              </Box>
              <Box
                className={`pointer flex flex-column ${
                  !props?.expand && "align-center"
                }`}
                onClick={() => navigate(pathNames.PROFILE_PAGE)}
              >
                {!props?.expand ? (
                  <AccountCircleIcon />
                ) : (
                  <SMButton>Profile</SMButton>
                )}
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }} onClick={() => dispatch(logoutAction())}>
            {!props?.expand ? (
              <Box sx={{ mx: "auto" }}>
                <LogoutIcon />
              </Box>
            ) : (
              <SMButton>{"logout"}</SMButton>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
