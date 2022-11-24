import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CreateCupon from "./CreateCupon";
import Description from "./Description";
import Location from "./Location";
import PreviewCupon from "./PreviewCupon";
import Products from "./Products";

function CreateOffer(props) {
  return (
    <Box sx={{ display: "flex", width: "100%", paddingTop: "2em" }}>
      {props.step === 1 ? <CreateCupon></CreateCupon> : <></>}
      {props.step === 2 ? <Description></Description> : <></>}
      {props.step === 3 ? <Products></Products> : <></>}
      {props.step === 4 ? <Location></Location> : <></>}
      {props.step === 5 ? <PreviewCupon></PreviewCupon> : <></>}
    </Box>
  );
}

export default CreateOffer;
