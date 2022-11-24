import { CuponReason } from "../../MockData/CuponReason";

export default function handler(req, res) {
  console.log("Here");
  res.status(200).json(CuponReason);
}
