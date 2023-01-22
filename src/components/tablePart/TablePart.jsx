import React, { useState, useRef } from "react";
import styles from "./TablePart.module.scss";

export default function TablePart({ colNames, rowNames }) {
  const rowName = ["A", "B", "C", "D", "E", "F", "G"];
  
  return (
    <div className={styles.tableBlock}>
      <table>
        <tr>
          {colNames.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
        </tr>
        <tbody>
          {rowNames.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              {rowName.map((colName) => (
                <td key={colName}>
                  <select>
                    <option value="-">-</option>
                    <option value="+">+</option>
                  </select>
                </td>
              ))}
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
