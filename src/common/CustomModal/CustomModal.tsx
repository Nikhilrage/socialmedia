import { Modal, Box } from "@mui/material";
import "./customModal.css";
import { useDimensions } from "../../hooks/useDimensions";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export interface CustomModalProps {
  darkTheme?: boolean;
  widthInPercent?: number;
  onClose: any;
  status: boolean;
  children: any;
  closeButton?: boolean;
  borderRadius?: any;
  padding?: boolean;
}

const CustomModal = ({
  widthInPercent = 50,
  status,
  onClose = () => {},
  darkTheme = true,
  children,
  padding = true,
  closeButton = false,
  borderRadius = "10px",
}: CustomModalProps) => {
  const { sm } = useDimensions();

  return (
    <Modal
      open={status}
      onClose={onClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <Box className="parent-modal" sx={{ p: 1 }}>
        <Box
          sx={{
            flexGrow: !sm ? 0 : 1,
            pointerEvents: "all",
            width: sm ? "100%" : widthInPercent + "%",
            position: "relative",
          }}
        >
          {closeButton && (
            <Box
              sx={{
                textAlign: "right",
                position: "absolute",
                top: -25,
                width: "100%",
              }}
            >
              <CloseOutlinedIcon />
            </Box>
          )}
          <Box
            sx={{
              backgroundColor: darkTheme ? "#161616" : "#E8E8E8",
              borderRadius: borderRadius,
              boxShadow: darkTheme ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
              p: padding ? 3 : 0,
              maxHeight: "90vh",
              overflow: "auto",
              color: darkTheme ? "#E8E8E8" : "#161616",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
export default CustomModal;
