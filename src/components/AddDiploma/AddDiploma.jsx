import { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  RadioGroup,
  Typography,
  FormControlLabel,
  Button,
} from "@mui/material";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  StyledRadio,
  StyledTextField,
  StyledTypography,
} from "./AddDiploma.style";
// const StyledRadio = styled(Radio)(() => ({
//   "& svg": {
//     width: "1.5em",
//     height: "1.5em",
//   },
// }));
// const StyledTextField = styled(TextField)(() => ({
//   background: "#F1F2F5",
//   borderRadius: "8px",
//   outlineWidth: "0px",
//   boxSizing: "border-box",
//   "& fieldset": { border: "none" },
//   width: "100%",
//   marginBottom: "1rem",
// }));
// const StyledTypography = styled(Typography)(() => ({
//   boxSizing: "border-box",
//   fontFamily: "Roboto",
//   fontStyle: "normal",
//   fontWeight: "400",
//   fontSize: "1.25rem",
//   lineHeight: "1rem",
//   marginBottom: "0.5rem",
// }));

function AddDiploma() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const currentYear = new Date().getFullYear();

  const startOnChangeHandler = (date) => {
    setStart(date.$y.toString());
  };
  const endOnChangeHandler = (date) => {
    setEnd(date.$y.toString());
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "38px",
          }}
        >
          Add Diploma Form
        </Typography>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CardContent
            sx={{
              width: "33.75rem",
              height: { sm: "35rem", xs: "45rem" },
              padding: "3.5em 4.75em ",

              border: "1px solid black",
              background: "#FFFFFF",
              boxShadow: "0px 12px 44px -8px rgba(64, 79, 216, 0.24)",
              borderRadius: "12px",
            }}
          >
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <StyledTypography>Student Address</StyledTypography>
                <StyledTextField
                  name="studentAddress"
                  placeholder="Student Address"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <StyledTypography>Faculty</StyledTypography>
                <StyledTextField
                  name="faculty"
                  placeholder="Student Faculty"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <StyledTypography>GPA</StyledTypography>
                <StyledTextField name="gpa" placeholder="Ex: 90.8" fullWidth />
              </Grid>
              <Grid xs={12} item>
                <RadioGroup
                  row
                  style={{
                    justifyContent: "space-between",
                    paddingRight: "140px",
                  }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="bachelor"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="bachelor"
                    control={<StyledRadio />}
                    label="Bachelor"
                  />
                  <FormControlLabel
                    value="master"
                    control={<StyledRadio />}
                    label="Master"
                  />
                </RadioGroup>
              </Grid>

              <Grid xs={12} sm={6} item>
                <StyledTypography>Start Date</StyledTypography>

                <DatePicker
                  openTo="year"
                  views={["year"]}
                  value={start}
                  components={{ OpenPickerIcon: ExpandMoreIcon }}
                  minDate={(currentYear - 8).toString()}
                  maxDate={currentYear.toString()}
                  onChange={startOnChangeHandler}
                  renderInput={(params) => <StyledTextField {...params} />}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <StyledTypography>End Date</StyledTypography>

                <DatePicker
                  openTo="year"
                  views={["year"]}
                  value={end}
                  components={{ OpenPickerIcon: ExpandMoreIcon }}
                  minDate={(currentYear - 8).toString()}
                  maxDate={currentYear.toString()}
                  onChange={endOnChangeHandler}
                  renderInput={(params) => <StyledTextField {...params} />}
                />
              </Grid>
              <Grid
                xs={12}
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    width: "157px",
                    height: "43px",
                    background: "#404FD8",
                    borderRradius: "8px",
                    color: "#FFFFFF",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    marginTop: "24px",
                    textTransform: "none",
                    "&:hover": {
                      boxShadow: "none",
                      color: "#404FD8",
                    },
                  }}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </LocalizationProvider>
    </>
  );
}

export default AddDiploma;
