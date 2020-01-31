import React from 'react'
import "./chartScatter.css"
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


const ChartScatter = () => {

    const data = [
        {
            name: '', x: 4000, y: 2400, z: 2400,
        },
        {
            name: '', x: 3000, y: 1398, z: 2210,
        },
        {
            name: '', x: 1000, y: 9800, z: 2290,
        },
        {
            name: '', x: 500, y: 3908, z: 2000,
        },
        {
            name: '', x: 2000, y: 4800, z: 2181,
        },
        {
            name: '', x: 250, y: 3800, z: 2500,
        },
        {
            name: '', x: 3490, y: 4300, z: 2100,
        },
    ];

    return(
        <div className="paper">
            <ScatterChart
                className="chart"
                width={360}
                height={320}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="" />
                <YAxis type="number" dataKey="y" name="weight" unit="" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="#8884d8" />
            </ScatterChart>
        </div>
    )
}

export default ChartScatter;