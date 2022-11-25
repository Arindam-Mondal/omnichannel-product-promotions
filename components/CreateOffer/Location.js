import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { DataGrid } from "@mui/x-data-grid";

function Location(props) {
  const [region, setRegion] = React.useState("");
  const [market, setMarket] = React.useState("");
  const [store, setStore] = React.useState("");
  const [area, setArea] = React.useState("");

  const columns = [
    { field: "store", headerName: "STORE", width: 100 },
    {
      field: "address",
      headerName: "ADDRESS",
      width: 250,
    },
    {
      field: "city",
      headerName: "CITY",
      width: 250,
    },
    {
      field: "postal",
      headerName: "POSTAL CODE",
      width: 150,
    },
    {
      field: "state",
      headerName: "STATE",
      width: 150,
    },
  ];

  const rows = [
    {
      id: 1,
      store: "27128",
      address: "178A Wilson Avenue",
      city: "Lakewood",
      postal: "14472",
      state: "CO",
    },
    {
      id: 2,
      store: "25678",
      address: "161 Main St",
      city: "Tampa",
      postal: "33619",
      state: "FL",
    },
    {
      id: 3,
      store: "14578",
      address: "2300-16 Fairmount Ave",
      city: "Niagara Falls",
      postal: "14304",
      state: "NY",
    },
    {
      id: 4,
      store: "11124",
      address: "2501 West first St",
      city: "Noth Wales",
      postal: "19454",
      state: "PA",
    },
    {
      id: 5,
      store: "98712",
      address: "840 Penrose Ave",
      city: "Watertown",
      postal: "13601",
      state: "NY",
    },
    {
      id: 8,
      store: "45873",
      address: "1255 Arsenal St",
      city: "Syracuse",
      postal: "13205",
      state: "NY",
    },
    {
      id: 9,
      store: "78541",
      address: "1406 Welsh Road",
      city: "Oswego",
      postal: "13126",
      state: "NY",
    },
    {
      id: 10,
      store: "78458",
      address: "214 South Union Avenue",
      city: "Philadelphia",
      postal: "19130",
      state: "PA",
    },
    {
      id: 11,
      store: "45845",
      address: "971 West First St",
      city: "Oswego",
      postal: "13126",
      state: "NY",
    },
  ];

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
            <Typography component="span">Region </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="region"
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
              }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">Market</Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="market"
              value={market}
              onChange={(e) => {
                setMarket(e.target.value);
              }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">Area </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="area"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
              sx={{ mr: 1 }}
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Typography component="span">Store Id </Typography>
          </Grid>
          <Grid item xs={3}>
            <OutlinedInput
              id="store"
              value={store}
              onChange={(e) => {
                setStore(e.target.value);
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
              Search Location
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ height: 400, width: "100%", mt: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          ppsaSize={5}
          rowsPerPpsaOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
      <Box
        sx={{
          textAlign: "right",
        }}
      >
        <Button
          onClick={() => {}}
          sx={{
            m: 1,
            border: 1,
            borderColor: "primary.main",
            borderRadius: 1,
          }}
        >
          Add Selected Locations for Promotion
        </Button>
      </Box>
    </Box>
  );
}

export default Location;
