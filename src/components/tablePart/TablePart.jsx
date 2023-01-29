import React, { useState } from "react";
import styles from "./TablePart.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function TablePart({
  rowData,
  changeData,
  addNewRow,
  deleteRow,
}) {
  const [inputValue, setInputValue] = useState("");

  const renderingSelects = (el) => {
    return Object.entries(el.value).map(([key, value], index) => (
      <td key={index} className={styles.selects}>
        <select
          value={value}
          onChange={(e) => {
            changeData(el, e.target.value, key);
          }}
        >
          <option value="-">-</option>
          <option value="+">+</option>
        </select>
      </td>
    ));
  };

  return (
    <div className={styles.table}>
      <table className={styles.tableBlock}>
        <tr className={styles.header}>
          <th>Dastur</th>
          <th>Xujumga qarshi sistemalin yondashuv</th>
          <th>
            Web ilovalar uchun Tarmoqlararo ekran(web application firewall)
          </th>
          <th>Web pochta traigini antivirus tekshiruvi</th>
          <th>Konfidensial ma'lumotlarni tarqalishidan himoya qilish </th>
          <th>SIEM (syslog) bilan integratsiya</th>
          <th>Ma'lumotlar yo'qolishini oldini olish tizimi</th>
          <th>Anonimayzerlarni bloklash (Блокировка анонимайзеров)</th>
          <th>"+" lar soni</th>
          <th>Amallar</th>
        </tr>
        <tbody>
          {rowData.map((el) => (
            <tr className={styles.row}>
              <td className={styles.rowNames}>{el.name}</td>
              {renderingSelects(el)}
              <td className={styles.results}>{el.count}</td>
              <td className={styles.btnWrapper}>
                <button className={styles.btn}>
                  <DeleteIcon
                    type="button"
                    onClick={() => deleteRow(el)}
                    className={styles.deleteBtn}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.addingBlock}>
        <input
          className={styles.addInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AddIcon
          className={styles.addIcon}
          type="button"
          onClick={() => addNewRow(inputValue)}
        />
      </div>
    </div>
  );
}
