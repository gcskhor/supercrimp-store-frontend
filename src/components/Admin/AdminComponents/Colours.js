import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../store";
import ColoursTable from "./Colours/ColoursTable.js";

export default function Colours() {
  const [colours, setColours] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/admin/colours`)
      .then((response) => {
        setColours(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <ColoursTable colours={colours} />;
}
