import { CuponType } from "../../MockData/CuponType";

export default function handler(req, res) {
  console.log("Here");
  res.status(200).json(CuponType);
}
