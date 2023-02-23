import { Radio, TextField, Typography, styled } from "@mui/material";

export const StyledRadio = styled(Radio)(() => ({
  "& svg": {
    width: "1.5em",
    height: "1.5em",
  },
}));
export const StyledTextField = styled(TextField)(() => ({
  background: "#F1F2F5",
  borderRadius: "8px",
  outlineWidth: "0px",
  boxSizing: "border-box",
  "& fieldset": { border: "none" },
  width: "100%",
  marginBottom: "1rem",
}));
export const StyledTypography = styled(Typography)(() => ({
  boxSizing: "border-box",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "1.25rem",
  lineHeight: "1rem",
  marginBottom: "0.5rem",
}));
