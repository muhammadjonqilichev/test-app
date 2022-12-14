import React from "react";
// import TablePart from "./components/tablePart/TablePart";
import { Container } from "@mui/material";
import { BarChart } from "./components/Bar/Bar";
import { InfoPart } from "./components/Introductions/InfoPart";

function App() {
  return (
    <div className="App">
      <Container>
        {/* <TablePart/> */}
        <BarChart/>
        <InfoPart/>
      </Container>
    </div>
  );
}

export default App;
