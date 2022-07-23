import { people } from "../../../data/people";

export default function handler(req, res) {
  console.log(people);
  res.status(200).json(people);
}
