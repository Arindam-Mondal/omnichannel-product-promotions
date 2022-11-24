import * as React from "react";
import { CssBaseline, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function CreateCupon(props) {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [cuponType, setCuponType] = React.useState("");
  const [cuponTypes, setCuponTypes] = React.useState([]);
  const [reason, setReason] = React.useState("");
  const [reasons, setReasons] = React.useState([]);

  React.useEffect(() => {
    // setLoading(true);
    fetch("/api/cupon-type")
      .then((res) => res.json())
      .then((data) => {
        setCuponTypes(data);
        // setLoading(false);
      });

    fetch("/api/cupon-reason")
      .then((res) => res.json())
      .then((data) => {
        setReasons(data);
        // setLoading(false);
      });
  }, []);

  const handleCuponTypeChange = (event) => {
    setCuponType(event.target.value);
  };

  const handleCuponReasonChange = (event) => {
    setReason(event.target.value);
  };

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
            borderColor: "secondary.main",
            borderRadius: 1,
            textAlign: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Grid item xs={4}>
            <Typography
              component="span"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              Cupon Creater :
            </Typography>{" "}
            Pradeep Karunakaran
          </Grid>
          <Grid item xs={4}>
            <Typography
              component="span"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              Email :
            </Typography>{" "}
            pradeep.k@gmail.com
          </Grid>
          <Grid item xs={4}>
            <Typography
              component="span"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              Phone Number :
            </Typography>{" "}
            974-858-256
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component="span">Cupon Type </Typography>
          </Grid>
          <Grid item xs={8}>
            <Select
              id="cupon-type"
              value={cuponType}
              onChange={handleCuponTypeChange}
              size="small"
              sx={{ minWidth: 200 }}
            >
              {cuponTypes.map((cuponType) => (
                <MenuItem value={cuponType.id}>{cuponType.type}</MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>

        <Grid container item xs={4}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component="span">Reason </Typography>
          </Grid>
          <Grid item xs={8}>
            <Select
              id="cupon-reason"
              value={reason}
              onChange={handleCuponReasonChange}
              size="small"
              sx={{ minWidth: 200 }}
            >
              {reasons.map((cuponReason) => (
                <MenuItem value={cuponReason.id}>{cuponReason.reason}</MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component="span">Coupon Method </Typography>
          </Grid>
          <Grid item xs={7}>
            <FormControlLabel control={<Checkbox />} label="Paper" />
            <FormControlLabel control={<Checkbox />} label="Digital" />
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component="span">Start Date </Typography>
          </Grid>
          <Grid item xs={8}>
            <DatePicker
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
            />
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component="span">End Date </Typography>
          </Grid>
          <Grid item xs={8}>
            <DatePicker
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
            />
          </Grid>
        </Grid>
        <Grid container item xs={4}></Grid>
        <Grid container item xs={8}>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component="span">Additional Comments </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              style={{ width: "90%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateCupon;
