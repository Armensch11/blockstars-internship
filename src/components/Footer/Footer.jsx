import { Grid, Box, styled, Typography } from "@mui/material";
import web3 from "./images/web3.png";
import { Image } from "mui-image";
const StyledBox = styled(Box)(() => ({
  border: "1px solid black",
  width: "8rem",
  height: "3.75rem",
  display: "flex",
  justifyContent: "center",
}));
const StyledGrid = styled(Grid)(() => ({
  height: "6.25rem",
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
function Footer() {
  return (
    <>
      <Grid container>
        <StyledGrid xs={12} sm={4} lg={4} item>
          <Box>
            <Image src={web3} sx={{ width: "131px", height: "60px" }} />
          </Box>
        </StyledGrid>
        <StyledGrid xs={12} sm={4} lg={4} item>
          <Typography>&copy; About Copyright</Typography>
        </StyledGrid>
        <StyledGrid xs={12} sm={4} lg={4} item>
          <Typography sx={{ display: "inline" }}>Powered by:</Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              textDecorationLine: "underline",
              display: "inline",
            }}
          >
            
            Blockstars
          </Typography>
        </StyledGrid>
      </Grid>
    
    </>
  );
}
export default Footer;
