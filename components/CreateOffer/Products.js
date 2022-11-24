import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

function Products(props) {
  const [upc, setUpc] = React.useState("");
  const [slin, setSlin] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [psa, setPsa] = React.useState("");
  const [comm, setComm] = React.useState("");
  const [subComm, setSubComm] = React.useState("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2}>
        <Grid
          container
          item
          xs={12}
          sx={{
            display: "flex",
            border: 1,
            borderColor: "primary.main",
            borderRadius: 1,
            alignItems: "center",
            p: 2,
          }}
          rowSpacing={2}
        >
          <Grid item xs={1}>
            <Typography component="span">Upc </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="upc"
              value={upc}
              onChange={(e) => {
                setUpc(e.target.value);
              }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">SLIN No </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="slin"
              value={slin}
              onChange={(e) => {
                setSlin(e.target.value);
              }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">PSA </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="psa"
              value={psa}
              onChange={(e) => {
                setPsa(e.target.value);
              }}
              sx={{ mr: 1 }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">Desc </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="desc"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              sx={{ mr: 1 }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">Comm </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="comm"
              value={comm}
              onChange={(e) => {
                setComm(e.target.value);
              }}
              sx={{ mr: 1 }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">Sub Comm </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="subComm"
              value={subComm}
              onChange={(e) => {
                setSubComm(e.target.value);
              }}
              sx={{ mr: 1 }}
              size="small"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "right",
            }}
          >
            <Button
              onClick={() => {}}
              sx={{
                mr: 1,
                border: 1,
                borderColor: "primary.main",
                borderRadius: 1,
              }}
            >
              Search Items
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
