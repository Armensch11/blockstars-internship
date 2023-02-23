import { CardMedia, Grid, Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Image } from "mui-image";
import nftHat from "./images/NftHat.png";

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
            <Image src={nftHat} sx={{ height: "17.5rem" }} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ height: "36.5rem", backgroundColor: "#404FD8" }}
      ></Grid>
      <Grid container sx={{ height: "40rem" }}>
        <Grid item>
          <Typography>The Advantage Of This Method</Typography>
          <Typography>
            Storing important information like diplomas on a blockchain system
            has many benefits
          </Typography>
          <Paper>
            <Image />
            <Typography>
              It ensures that the information is secure and cannot be altered or
              deleted. This gives peace of mind to the individual and can also
              increase the value of their diploma if it is stored as a
              Non-Fungible Token (NFT)
            </Typography>
          </Paper>
          <Paper>
            <Image />
            <Typography>
              Having the information on the blockchain makes it easily
              accessible and verifiable, eliminating the need for paper copies
              and making it easier for employers to verify the validity of a
              diploma
            </Typography>
          </Paper>
          <Paper>
            <Image />
            <Typography>
              Keeping track of important information using blockchain technology
              is a smart choice for individuals and organizations
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ height: "30rem", backgroundColor: "#404FD8" }}
      ></Grid>
    </>
  );
}
export default HomePage;
