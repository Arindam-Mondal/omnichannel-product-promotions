import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { DataGrid } from "@mui/x-data-grid";

function Products(props) {
  const [upc, setUpc] = React.useState("");
  const [slin, setSlin] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [psa, setPsa] = React.useState("");
  const [comm, setComm] = React.useState("");
  const [subComm, setSubComm] = React.useState("");

  const columns = [
    { field: "slin", headerName: "SLIN", width: 150 },
    {
      field: "upc",
      headerName: "UPC",
      width: 220,
    },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      editable: true,
    },
    {
      field: "psa",
      headerName: "PSA",
      type: "number",
      width: 200,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      slin: "303024",
      upc: "0004520506591",
      description: "Harshy Snack Mix Tube",
      psa: 35,
    },
    {
      id: 2,
      slin: "128096",
      upc: "0090100506591",
      description: "Carolina Snack Ring",
      psa: 10,
    },
    {
      id: 3,
      slin: "103084",
      upc: "0041100506591",
      description: "Skol LC Spearmint 1.2z",
      psa: 12,
    },
    {
      id: 4,
      slin: "303024",
      upc: "0025412506591",
      description: "24/7 Life Laundry Detergent 5Oz",
      psa: 16,
    },
    {
      id: 5,
      slin: "785458",
      upc: "0880100506591",
      description: "Glass Cleaner Set",
      psa: 14,
    },
    {
      id: 8,
      slin: "303024",
      upc: "0030100658745",
      description: "Beer Cap XL",
      psa: 15,
    },
    {
      id: 9,
      slin: "123012",
      upc: "0060100506791",
      description: "CRA Shirt Red 2XL",
      psa: 20,
    },
    {
      id: 10,
      slin: "951745",
      upc: "0050100508588",
      description: "Lance Cinanamon Roll 4z",
      psa: 14,
    },
    {
      id: 11,
      slin: "365123",
      upc: "0060100506521",
      description: "Kraft Sweet and Sour Sauce",
      psa: 10,
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
          Add Selected Items for Promotion
        </Button>
      </Box>
    </Box>
  );
}

export default Products;
