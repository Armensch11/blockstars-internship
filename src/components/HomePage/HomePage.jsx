import {
  Grid,
  Typography,
  Paper,
  styled,
  InputBase,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { Image } from "mui-image";
import NftHat from "./images/NftHat.png";
import connectIcon from "./images/connectIcon.png";
import createIcon from "./images/createIcon.png";
import findIcon from "./images/findIcon.png";
import starIcon from "./images/starIcon.png";
import circleIcon from "./images/circleIcon.png";
import polygonIcon from "./images/polygonIcon.png";

const ConnectCreateFindBox = styled(Box)(() => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  paddingLeft: "2rem",
  paddingRight: "3.2rem",
  height: "18rem",
  width: "22rem",
  borderRadius: "0.75rem",
  background: "rgba(229, 231, 248, 0.12)",
}));
const BoldTypography = styled(Typography)(() => ({
  color: "#FFFFFF",
  boxSizing: "border-box",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: "38px",
}));
const StandartTypography = styled(Typography)(() => ({
  color: "#E5E7F8",
  boxSizing: "border-box",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "133%",
}));
const StyledPaper = styled(Paper)(() => ({
  width: "46rem",
  height: "5.5rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0",

  background: "#FFFFFF",
  boxShadow: "0px 12px 44px -8px rgba(64, 79, 216, 0.24)",
  borderRadius: "12px",
  paddingLeft: "1.5rem",
}));

function HomePage() {
  return (
    <>
      <Grid container sx={{ border: "1px solid black", height: "40rem" }}>
        <Grid sm={12} md={6} item sx={{ border: "1px solid black" }}>
          <Box
            sx={{
              boxSizing: "border-box",
              width: "24.5rem",
              border: "1px solid black",
              marginTop: "12.25rem",
              marginLeft: "10.5rem",
            }}
          >
            <Typography
              sx={{
                color: "#1E2561",
                boxSizing: "border-box",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "64px",
                lineHeight: "75px",
              }}
            >
              Your Own NFT Diploma
            </Typography>
          </Box>
          <Box
            sx={{
              boxSizing: "border-box",
              width: "18.75rem",
              border: "1px solid black",
              marginTop: "1rem",
              marginLeft: "10.5rem",
            }}
          >
            <Typography
              sx={{
                color: "#1E2561",
                boxSizing: "border-box",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "133%",
              }}
            >
              Upload your university Diploma to web3 and make it a unique NFT.
            </Typography>
          </Box>
        </Grid>
        <Grid
          sm={12}
          md={6}
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",

              height: "22.5rem",
              width: "36rem",
              marginTop: "7rem",
              marginRight: "6.25rem",
              marginBottom: "9rem",
            }}
          >
            <Image src={NftHat} sx={{ height: "17.5rem" }} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: "36.5rem",
          backgroundColor: "#404FD8",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: "4rem",
          paddingBottom: "5rem",
          border: "1px solid black",
        }}
      >
        <Grid item>
          <BoldTypography
            sx={{
              fontSize: "56px",
              lineHeight: "66px",
              border: "1px solid black",
            }}
          >
            How It Works
          </BoldTypography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            boxSizing: "border-box",
            height: "18rem",

            border: "1px solid black",
            // margin: "10.5rem 13rem 10.5rem 5rem",

            gap: "1.5rem",
          }}
        >
          <ConnectCreateFindBox>
            <Box
              sx={{ width: "51px", hight: "43px", border: "1px solid black" }}
            >
              <Image src={connectIcon} />
            </Box>

            <BoldTypography>Connect Wallet</BoldTypography>
            <StandartTypography>
              You should be able to connect a your wallet in order to create NFT
              Diploma.
            </StandartTypography>
          </ConnectCreateFindBox>
          <ConnectCreateFindBox>
            <Box
              sx={{ width: "51px", hight: "43px", border: "1px solid black" }}
            >
              <Image src={createIcon} />
            </Box>
            <BoldTypography>Create Diploma</BoldTypography>
            <StandartTypography>
              The admin will create your Diploma with your wallet address.
            </StandartTypography>
          </ConnectCreateFindBox>
          <ConnectCreateFindBox>
            <Box
              sx={{ width: "51px", hight: "43px", border: "1px solid black" }}
            >
              <Image src={findIcon} />
            </Box>
            <BoldTypography>Find Diploma</BoldTypography>
            <StandartTypography>
              Scan the QR or search with your Diploma ID/address to find your
              NFT Diploma.
            </StandartTypography>
          </ConnectCreateFindBox>
        </Grid>
      </Grid>
      <Grid container sx={{ height: "40rem" }}>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            width: "50rem",
            margin: "0 auto",
          }}
        >
          <BoldTypography
            sx={{
              color: "#1E2561",
              fontSize: "56px",
              lineHeight: "66px",
              border: "1px solid black",
            }}
          >
            The Advantage Of This Method
          </BoldTypography>
          <StandartTypography
            sx={{
              color: "#1E2561",
              fontSize: "16px",
              marginBottom: "1.75rem",
              width: "30rem",
              textAlign: "center",
            }}
          >
            Storing important information like diplomas on a blockchain system
            has many benefits
          </StandartTypography>
          <StyledPaper>
            <Box
              sx={{
                width: "60px",
                height: "60px",
                flexShrink: "0",
                marginRight: "1.5rem",
              }}
            >
              <Image src={starIcon} />
            </Box>

            <StandartTypography sx={{ color: "#1E2561", fontSize: "16px" }}>
              It ensures that the information is secure and cannot be altered or
              deleted. This gives peace of mind to the individual and can also
              increase the value of their diploma if it is stored as a
              Non-Fungible Token (NFT)
            </StandartTypography>
          </StyledPaper>
          <StyledPaper>
            <Box
              sx={{
                width: "60px",
                flexShrink: "0",
                marginRight: "1.5rem",
                // // height: "60px",
                // backgroundImage: `url(${circleIcon})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
              }}
            >
              <Image src={circleIcon} />
            </Box>

            <StandartTypography sx={{ color: "#1E2561", fontSize: "16px" }}>
              Having the information on the blockchain makes it easily
              accessible and verifiable, eliminating the need for paper copies
              and making it easier for employers to verify the validity of a
              diploma
            </StandartTypography>
          </StyledPaper>
          <StyledPaper>
            <Box sx={{ width: "60px", flexShrink: "0", marginRight: "1.5rem" }}>
              <Image src={polygonIcon} />
            </Box>

            <StandartTypography sx={{ color: "#1E2561", fontSize: "16px" }}>
              Keeping track of important information using blockchain technology
              is a smart choice for individuals and organizations
            </StandartTypography>
          </StyledPaper>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: "30rem",
          backgroundColor: "#404FD8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <BoldTypography sx={{ fontSize: "56px", lineHeight: "66px" }}>
            Search All NFT Diplomas Now!
          </BoldTypography>
          <StandartTypography
            sx={{ fontSize: "16px", textAlign: "center", width: "30rem" }}
          >
            Fill in a specific Diploma ID or address to find all existing
            Diplomas that match the input.
          </StandartTypography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <InputBase
            sx={{
              backgroundColor: "#F1F2F5",
              borderRadius: "8px",
              boxSizing: "border-box",
              width: "30rem",
              height: "3rem",
            }}
            placeholder="Enter Student Address or Diploma ID"
          />
          <Button
            sx={{
              color: "#404FD8",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              textTransform: "none",
              boxSizing: "border-box",
              width: "9.8rem",
              height: "2.7rem",
              "&:hover": {
                backgroundColor: "#f2f2f2",
                boxShadow: "0px 6px 8px -3px ",
              },
            }}
          >
            <StandartTypography
              sx={{
                color: "#404FD8",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: " 19px",
              }}
            >
              Search
            </StandartTypography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default HomePage;
