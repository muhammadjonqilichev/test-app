import React, { useMemo, useState } from "react";
import TablePart from "./components/tablePart/TablePart";
import { Container } from "@mui/material";
import { BarChart } from "./components/Bar/Bar";
import { InfoPart } from "./components/Introductions/InfoPart";
import Header from './components/Header'
import "./App.css";

function App() {

  const [rowData, setRowData] = useState([
    { name: "Kerio Control", count: 0, value: { colA: '-', colB: '-', colC: '-', colD: '-', colE: '-', colF: '-', colG: '-' } },
    { name: "Ideco UTM", count: 0, value: { colA: '-', colB: '-', colC: '-', colD: '-', colE: '-', colF: '-', colG: '-' } },
    { name: "Kerio Connect", count: 0, value: { colA: '-', colB: '-', colC: '-', colD: '-', colE: '-', colF: '-', colG: '-' } },
    { name: "UserGate", count: 0, value: { colA: '-', colB: '-', colC: '-', colD: '-', colE: '-', colF: '-', colG: '-' } },
    { name: "Nmap", count: 0, value: { colA: '-', colB: '-', colC: '-', colD: '-', colE: '-', colF: '-', colG: '-' } },
    { name: "WinRouter", count: 0, value: { colA: '-', colB: '-', colC: '-', colD: '-', colE: '-', colF: '-', colG: '-' } },
  ]);

  const getBarchartList = useMemo(() => {
    return rowData.map(el => {
      return {name: el.name, value: el.value, count: Object.values(el.value).filter(simbol => simbol === '+')?.length}
    })
  }, [rowData])

  const changeData = (row, value, key) => {
    console.log(key)
    setRowData(el => el.map(el => {
      if (el.name === row.name) {
        return {...el, value: {...el.value, [key]: value}}
      } else {
        return el
      }
    }))
  }

  const addNewRow = (name) => {
    if (rowData.find(el => el.name === name)) return
    setRowData(el => [...el, {name, count: 0, value: { colA: '-', colB: '-', colC: '-', colD: '-', colE: '-', colF: '-', colG: '-' }}])
  }

  const deleteRow = (row) => {
    setRowData(el => el.filter(el => el.name !== row.name))
  }

  return (
    <div className="App">
      <Header />
      <Container>
      <TablePart 
          rowData={getBarchartList} 
          changeData={changeData} 
          deleteRow={deleteRow}
          addNewRow={addNewRow}
          />
        <BarChart rowNames={getBarchartList} getBarchartList={getBarchartList} />
        <InfoPart/>
      </Container>
    </div>
  );
}

export default App;
