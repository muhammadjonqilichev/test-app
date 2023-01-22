import React from "react";
import TablePart from "./components/tablePart/TablePart";
import { Container } from "@mui/material";
import { BarChart } from "./components/Bar/Bar";
import { InfoPart } from "./components/Introductions/InfoPart";

function App() {

  const colNames = [
    "Dastur",
    "Xujumga qarshi sistemalin yondashuv",
    "Web ilovalar uchun Tarmoqlararo ekran(web application firewall)",
    "Web pochta trfigini antivirus tekshiruvi",
    "Konfidensial ma'lumotlarni tarqalishidan himoya qilish",
    "SIEM (syslog) bilan integratsiya",
    "Ma'lumotlar yo'qolishini oldini olish tizimi",
    "Anonimayzerlarni bloklash (Блокировка анонимайзеров)",
    '"+" lar soni',
  ];
  const rowNames = [
    {name: "Kerio Control", value: 0},
    {name:"Ideco UTM", value: 0},
    {name:"Kerio Connect", value: 0},
    {name:"UserGate", value: 0},
    {name:"Nmap", value: 0},
    {name:"WinRouter", value: 0},
  ];

  return (
    <div className="App">
      <Container>
      <TablePart colNames={colNames} rowNames={rowNames} />
        <BarChart colNames={colNames} rowNames={rowNames} />
        <InfoPart/>
      </Container>
    </div>
  );
}

export default App;
