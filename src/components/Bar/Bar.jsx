import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import styles from './Bar.module.scss';


export function BarChart({rowNames}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Web sayt ma’lumotlarining xavfsizligini ta’minlovchi dasturiy komplekslar tahlili',
      },
    },
  };
  
  const labels = rowNames.map(row => row.name);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dasturiy komplekslar tahlili',
        data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
        backgroundColor: 'rgba(108, 122, 137, 1)',
      }
    ],
  };
  
  return <Bar options={options} data={data}  className={styles.barChart}/>;
}
