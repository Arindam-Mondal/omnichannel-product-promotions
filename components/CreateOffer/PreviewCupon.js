import Image from "next/image";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";

function PreviewCupon(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2}>
        <Grid container item xs={5}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Typography component="span">Upload a different image </Typography>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid item xs={4}>
          <Image src="/mobile_mokup.png" width={200} height={300} />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
}

export default PreviewCupon;
