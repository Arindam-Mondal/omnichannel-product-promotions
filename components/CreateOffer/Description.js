import * as React from "react";
import { Grid, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";

function Description(props) {
  const [value, setValue] = React.useState("female");
  const [amount1, setAmount1] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [quantity1, setQuantity1] = React.useState("");
  const [item1, setItem1] = React.useState("");
  const [item8, setItem8] = React.useState("");
  const [item7, setItem7] = React.useState("");

  const [item4, setItem4] = React.useState("");
  const [item5, setItem5] = React.useState("");
  const [item6, setItem6] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <FormControlLabel value="description1" control={<Radio />} />
            <OutlinedInput
              id="standard-adornment-amount"
              value={amount1}
              onChange={(e) => {
                setAmount1(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              sx={{ mr: 1, width: 100 }}
              size="small"
            />
            off
            <OutlinedInput
              id="quantity1"
              value={quantity1}
              onChange={(e) => {
                setQuantity1(e.target.value);
              }}
              sx={{ mr: 1, ml: 1, width: 100 }}
              size="small"
            />
            <OutlinedInput
              id="standard-adornment-amount"
              value={item1}
              onChange={(e) => {
                setItem1(e.target.value);
              }}
              sx={{ mr: 1, width: 400 }}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel value="description2" control={<Radio />} />
            <OutlinedInput
              id="item4"
              value={item4}
              onChange={(e) => {
                setItem4(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              sx={{ mr: 1, width: 100 }}
              size="small"
            />
            off of total cart value of
            <OutlinedInput
              id="item5"
              value={item5}
              onChange={(e) => {
                setItem5(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              sx={{ mr: 1, ml: 1, width: 100 }}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel value="description3" control={<Radio />} />
            <OutlinedInput
              id="item6"
              value={item6}
              onChange={(e) => {
                setItem6(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              sx={{ mr: 1, width: 100 }}
              size="small"
            />
            off
            <OutlinedInput
              id="item7"
              value={item7}
              onChange={(e) => {
                setItem7(e.target.value);
              }}
              sx={{ mr: 1, ml: 1, width: 200 }}
              size="small"
            />
            when you buy
            <OutlinedInput
              id="item8"
              value={item8}
              onChange={(e) => {
                setItem8(e.target.value);
              }}
              sx={{ mr: 1, ml: 1, width: 200 }}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            Comments
            <OutlinedInput
              id="standard-adornment-amount"
              value={comments}
              onChange={(e) => {
                setComments(e.target.value);
              }}
              sx={{ mr: 1, ml: 1, width: 620 }}
              size="small"
            />
          </Grid>
        </Grid>
      </RadioGroup>
    </Box>
  );
}

export default Description;
