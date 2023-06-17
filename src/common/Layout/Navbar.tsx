import { Box } from "@mui/material";
import { useDimensions } from "../../hooks/useDimensions";
//import { Bell, Logo, MenuIcon } from "../../constants/Images";
import logo from "../../assets/images/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SMInput from "../SMInput";

export interface NavbarProps {
  setExpand: any;
  expand: boolean;
}

const Navbar = (props: NavbarProps) => {
  const { sm } = useDimensions();

  return (
    <>
      <Box className="relative">
        <Box className="flex  align-center" sx={{ gap: 1 }}>
          {!sm ? (
            <Box></Box>
          ) : (
            <img
              src={"MenuIcon"}
              alt="menu"
              className="pointer"
              onClick={() => props?.setExpand(!props?.expand)}
            />
          )}
          <Box className={`flex-grow-1 ${sm && "text-center "}`}>
            <img src={logo} alt="Logo" style={{ width: sm ? 70 : 70 }} />
          </Box>
          <Box>
            <SMInput placeholder={"search"} />
          </Box>
          <NotificationsNoneIcon className="pointer" />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
