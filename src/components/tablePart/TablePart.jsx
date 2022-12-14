import React, { useState, useRef } from "react";
// import styles from "./TablePart.module.scss";

export default function TablePart() {
  const colNames = ["Dastur", "A", "B", "C", "D", "E", "F", "G"];
  const rowNames = ["A", "B", "C", "D", "E", "F", "G"];

  

  const [inputValue, setInputValue] = useState(0);
  var count = useRef(0)
  const getValues = (e) => {
    if (e.target.value === '+') {
      console.log(Number(count.current = count.current + 1));
      setInputValue(count.current)
    }else{
      Number(count.current = count.current -1)
      setInputValue(count.current)
    }
  }


  const [inputValue2, setInputValue2] = useState(0);
  var count2 = useRef(0)
  const getValues2 = (e) => {
    if (e.target.value === '+') {
      Number(count2.current = count2.current + 1);
      setInputValue2(count2.current)
    }else{
      Number(count2.current = count2.current -1)
      setInputValue2(count2.current)
    }
  }


  const [inputValue3, setInputValue3] = useState(0);
  var count3 = useRef(0)
  const getValues3 = (e) => {
    if (e.target.value === '+') {
     Number(count3.current = count3.current + 1);
      setInputValue3(count3.current)
    }else{
      Number(count3.current = count3.current -1)
      setInputValue3(count3.current)
    }
  }


  const [inputValue4, setInputValue4] = useState(0);
  var count4 = useRef(0)
  const getValues4 = (e) => {
    if (e.target.value === '+') {
      Number(count4.current = count4.current + 1);
      setInputValue4(count4.current)
    }else{
      Number(count4.current = count4.current -1)
      setInputValue4(count4.current)
    }
  }
  return (
    <div>
      <table>
        <tr>
          {colNames.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
        </tr>
        <tbody>
          <tr>
            <td>Kerio Control</td>
            {rowNames.map((colName) => (
              <td key={colName}>
                <select onChange={getValues}>
                  <option value="-">-</option>
                  <option value="+">+</option>
                </select>
              </td>
            ))}
            <td>{inputValue}</td>
          </tr>
          <tr>
            <td>Ideco UTM</td>
            {rowNames.map((colName) => (
              <td key={colName}>
                <select onChange={getValues2}>
                  <option value="-">-</option>
                  <option value="+">+</option>
                </select>
              </td>
            ))}
            <td>{inputValue2}</td>
          </tr>
         <tr>
            <td>Kerio Connect</td>
            {rowNames.map((colName) => (
              <td key={colName}>
                <select onChange={getValues3}>
                  <option value="-">-</option>
                  <option value="+">+</option>
                </select>
              </td>
            ))}
            <td>{inputValue3}</td>
          </tr>
          <tr>
            <td>UserGate</td>
            {rowNames.map((colName) => (
              <td key={colName}>
                <select onChange={getValues4}>
                  <option value="-">-</option>
                  <option value="+">+</option>
                </select>
              </td>
            ))}
            <td>{inputValue4}</td>
          </tr> 
        </tbody>
      </table>
    </div>
  );
}
