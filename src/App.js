import React, { useMemo, useState } from "react";
import TablePart from "./components/tablePart/TablePart";
import { Container } from "@mui/material";
import { BarChart } from "./components/Bar/Bar";
import { InfoPart } from "./components/Introductions/InfoPart";
import Header from './components/Header'
import "./App.css";
import Tables from "./components/Tables";
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

  const TABLE_COLUMNS_FIREWALL = [
    { name: 'Parametrlar', dataIndex: 'params' },
    { name: 'Imperva SecureSphere WAF', dataIndex: 'imperva' },
    { name: 'PT ilovasi xavfsizlik devori', dataIndex: 'pt' },
    { name: 'F5 BIG-IP ASM', dataIndex: 'f5' },
    { name: 'Vallarm', dataIndex: 'vallarm' },
    { name: 'Citrix NetScaler AppFirewall', dataIndex: 'citrix' },
    { name: 'Barracuda WAF', dataIndex: 'barracuda' }
  ]
  const TABLE_ROWS_FIREWALL = [
    { 
      params: 'Sniffer', 
      imperva: 'Ha, Inline bo‘lmagan sniffer',
      pt: 'Ha, monitoring rejimi',
      f5: 'Yo‘q',
      vallarm: 'Ha, monitoring rejimida (raw tcp reader)',
      citrix: 'Yo‘q',
      barracuda: 'Yo‘q'
    },
    {
      params: 'Bridge', 
      imperva: 'Ha, ishlamay qolgan shaffof ko‘prik (2-qavat) (apparatni aylanib o‘tish)',
      pt: 'Ha',
      f5: 'Ha',
      vallarm: "Yo'q",
      citrix: 'Ha (2-qavat)',
      barracuda: "Ha, ko‘prik yo‘li"
    },
    {
      params: 'Shaffof proksi-server', 
      imperva: 'Ha',
      pt: 'Ha',
      f5: "Yo'q",
      vallarm: "Yo'q",
      citrix: 'Ha',
      barracuda: "Ha"
    },
    {
      params: 'Teskari proksi-server', 
      imperva: 'Ha',
      pt: 'Ha',
      f5: "Ha",
      vallarm: "Ha",
      citrix: 'Ha',
      barracuda: "Ha"
    },
    {
      params: 'Retrospektiv tahlil (jurnallar/trafik yozuvlari tahlili)', 
      imperva: "Yo'q",
      pt: 'Ha, offline rejimda',
      f5: "Yo'q",
      vallarm: "Ha, monitoring rejimi",
      citrix: "Yo'q",
      barracuda: "Yo'q"
    },
  ]


  const TABLE_ROWS_INFORMATION = [
    { 
      params: 'Virtual mashina ko’rinishida', 
      imperva: 'Ha',
      pt: 'Ha',
      f5: 'Ha',
      vallarm: 'Ha',
      citrix: 'Ha',
      barracuda: 'Ha',
    },
    { 
      params: 'Apparet kompleks shaklida', 
      imperva: 'Ha',
      pt: 'Ha, Cisco va Array tarmoqlarining hamkor apparat yechimlari bilan ham mavjud',
      f5: 'Ha',
      vallarm: 'Ha. InfoWatch Attack Killer dasturining bir qismi sifatida',
      citrix: 'Ha',
      barracuda: 'Ha',
    },
    { 
      params: 'Bulutli servis ko’rinishida', 
      imperva: 'Amazon veb-xizmatlari, Microsoft Azure',
      pt: 'Microsoft Azure',
      f5: 'Microsoft Azure',
      vallarm: 'Amazon',
      citrix: 'Amazon veb-xizmatlari, Microsoft Azure',
      barracuda: 'Microsoft Azure',
    }
  ]

  const TABLE_ROWS_STANDAND_SUPPORT = [
    { 
      params: 'WebSocket-ni qo\'llab-quvvatlash', 
      imperva: 'Ha',
      pt: 'Ha',
      f5: 'Ha',
      vallarm: 'Ha',
      citrix: 'Ha',
      barracuda: 'Ha',
    },
    { 
      params: "XML qo'llab-quvvatlash", 
      imperva: 'Ha',
      pt: 'Ha',
      f5: 'Ha',
      vallarm: 'Ha',
      citrix: 'Ha',
      barracuda: 'Ha',
    },
    { 
      params: "JSON qo'llab-quvvatlash", 
      imperva: 'Ha',
      pt: 'Ha',
      f5: 'Ha',
      vallarm: 'Ha',
      citrix: 'Ha',
      barracuda: 'Ha',
    }
  ]

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
        <Tables style={{ marginTop: '10px !important' }} title={'Firewallarning ishlash rejimi'} columnData={TABLE_COLUMNS_FIREWALL} rowData={TABLE_ROWS_FIREWALL}/>
        <Tables style={{ marginTop: '10px !important' }} title={'Axborot uzatish usuli'} columnData={TABLE_COLUMNS_FIREWALL} rowData={TABLE_ROWS_INFORMATION}/>
        <Tables style={{ marginTop: '10px !important' }} title={'Web-standartlarni qo\'llab-quvvatlash'} columnData={TABLE_COLUMNS_FIREWALL} rowData={TABLE_ROWS_STANDAND_SUPPORT}/>

        <InfoPart/>
      </Container>
    </div>
  );
}

export default App;
