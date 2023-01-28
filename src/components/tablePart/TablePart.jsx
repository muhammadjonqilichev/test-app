import React, { useState, useRef } from "react";
import styles from "./TablePart.module.scss";

export default function TablePart({ rowData, changeData, addNewRow, deleteRow }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles.tableBlock}>
      <table>
        <tr>
          <th>Dastur</th>
          <th>Xujumga qarshi sistemalin yondashuv</th>
          <th>Web ilovalar uchun Tarmoqlararo ekran(web application firewall)</th>
          <th>Web pochta trfigini antivirus tekshiruvi</th>
          <th>Konfidensial ma'lumotlarni tarqalishidan himoya qilish </th>
          <th>SIEM (syslog) bilan integratsiya</th>
          <th>Ma'lumotlar yo'qolishini oldini olish tizimi</th>
          <th>Anonimayzerlarni bloklash (Блокировка анонимайзеров)</th>
          <th>"+" lar soni</th>
          <th>Amallar</th>
        </tr>
        <tbody>
          {
            rowData.map(el => <tr>
              <td>{el.name}</td>
                {
                  Object.entries(el.value).map(([key, value], index) => <td key={index}><select value={value} onChange={(e) => {changeData(el, e.target.value, key)} }>
                    <option value="-">-</option>
                    <option value="+">+</option>
                  </select></td>)
                }
              <td>{el.count}</td>
              <td><button type="button" onClick={() => deleteRow(el)}>Delete</button></td>
            </tr>)
          }
        </tbody>
      </table>
      <div>
        <input style={{ padding: 4, border: '2px solid gray', margin: 10}} value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
        <button style={{ padding: '0px 10px'}} type="button" onClick={() => addNewRow(inputValue)}>Add</button>
      </div>
    </div>
  );
}
