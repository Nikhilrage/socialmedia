import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
//import "./style.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDimensions } from "../../hooks/useDimensions";
//import AiOutlineHome from "react-icons/ai";
import { shallowEqual } from "react-redux";
import { pathNames } from "../../routes/pathNames";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setMenuExpand } from "../../redux/Slices/layoutSlice";
import { useLocation } from "react-router-dom";

export interface LayoutProps {
  children: any;
  optionalButtons?: any;
  subTitles?: any;
  navigation?: boolean;
}

const Layout = ({
  children,
  optionalButtons,
  subTitles,
  navigation = true,
}: LayoutProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const expand = useAppSelector(
    ({ layout }) => layout.menuExpand,
    shallowEqual
  );

  // const [expand, setExpand] = useState(false);
  const { sm } = useDimensions();
  const [currentMenu, setCurrentMenu] = useState<any>([]);

  const menus = [
    {
      name: "Home",
      icon: "",
      pathname: [pathNames.DASHBOARD],
    },
  ];

  useEffect(() => {
    setCurrentMenu(
      menus?.filter((item: any) => item?.pathname[0] === location?.pathname)
    );
  }, [location]);

  useEffect(() => {
    if (sm) {
      dispatch(setMenuExpand(false));
    }
  }, [sm]);

  return (
    <Box
      sx={{
        backgroundColor: sm ? "#161616" : "#0c0c0c",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      className="flex"
    >
      <Box
        sx={{
          borderBottom: "1px solid #2C2C2C",
          px: sm ? 1 : 3,
          py: 1,
          pl: sm ? 1 : 10,
        }}
      >
        <Navbar
          setExpand={(val: boolean) => dispatch(setMenuExpand(val))}
          expand={expand}
        />
      </Box>
      <Box sx={{ flexGrow: "1", overflow: "hidden", position: "relative" }}>
        <Box className="flex height-full">
          <Box
            className="height-full "
            sx={{
              left: 0,
              transform: sm && !expand ? "translateX(-100%)" : "translateX(0)",
              zIndex: "999",
            }}
          >
            <Sidebar
              setExpand={(val: boolean) => dispatch(setMenuExpand(val))}
              expand={expand}
              menus={menus}
            />
          </Box>
          <Box
            className="flex-grow-1"
            sx={{ p: sm ? 1 : 3, overflowY: "auto", overflowX: "hidden" }}
          >
            <Box className="flex height-full flex-column">
              {/*{navigation && (
                <Box>
                  <Box className="flex justify-between align-center">
                    <Box>
                      {currentMenu?.length > 0 && (
                        <Box className="flex align-center" sx={{ gap: 1 }}>
                          {!sm && (
                            <Box
                              sx={{
                                width: "36px",
                                height: "34px",
                                backgroundColor: "#2C2C2C",
                                p: "4px",
                                borderRadius: "6px",
                              }}
                            >
                              <img
                                src={currentMenu[0]?.icon}
                                alt={currentMenu[0]?.name}
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                          )}
                          <Box
                            className="flex-grow-1 mont-600"
                            sx={{ fontSize: "16px" }}
                          >
                            {currentMenu[0]?.name}
                          </Box>
                          <Box className="flex align-center">
                            {subTitles?.map((item: any, index: number) => {
                              return (
                                <Box key={index}>
                                  <Box className="flex">
                                    <Box
                                      className="font-16 mont-600"
                                      sx={{ ml: sm ? 0 : 2, mr: sm ? 1 : 3 }}
                                    >
                                      /
                                    </Box>
                                    <Box
                                      className="font-16 mont-600"
                                      sx={{ color: "#0669F8" }}
                                    >
                                      {item}
                                    </Box>
                                  </Box>
                                </Box>
                              );
                            })}
                          </Box>
                        </Box>
                      )}
                    </Box>
                    {optionalButtons && <Box>{optionalButtons}</Box>}
                  </Box>
                </Box>
              )}*/}
              <Box className="flex-grow-1" sx={{ pt: navigation ? 2 : 0 }}>
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
