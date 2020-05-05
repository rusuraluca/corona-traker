import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index.js';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data : { confirmed, deaths, recovered}, country }) =>  {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

     const lineChart = (
        dailyData.length != 0
            ? (
                <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label : 'Infectați',
                        borderColor: 'rgba(41, 255, 223, 1)',
                        backgroundColor: 'rgba(41, 255, 223, 1)',
                        fill: false,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label : 'Decese',
                        borderColor: 'rgba(255, 66, 66, 1)',
                        backgroundColor: 'rgba(255, 66, 66, 1)',
                        fill: true,
                    }],
                }}/>
            ) : null
     );

     const barChart = (
         confirmed
            ?(
                <Bar
                data={{
                    labels: ['Infectați', 'Vindecați', 'Decese'], 
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(41, 255, 223, 1)', 'rgba(110, 82, 255, 1)', 'rgba(255, 66, 66, 1)'],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]

                }}
                options={{
                    legend: { display: false },
                    title : { display: true, text:`Date curente în ${country}` }
                }}
                />
            ) : null

     )

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;