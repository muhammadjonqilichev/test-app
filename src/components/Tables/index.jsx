import styles from "./index.module.scss";

export default function App({ title, rowData = [{ name: 'asda', count: 2 }], columnData = [] }) {
  return (
    <div style={{ margin: '40px 0px'}}>
    <h1>{title}</h1>
      <table className={styles.tableBlock}>
        <tr className={styles.header}>
          {columnData.map((el, idx) => (<th id={idx}>{el.name}</th>))}
        </tr>
        <tbody>
          {rowData.map((el, idx) => (
            <tr className={styles.row}>
              {columnData.map((col) => <td className={styles.rowNames}>{el[col.dataIndex]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
