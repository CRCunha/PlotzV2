import React from 'react'
import "./chartComposed.css"
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


const ChartComposed = () => {

    const data = [
        {
            name: '', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: '', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: '', uv: 1000, pv: 9800, amt: 2290,
        },
        {
            name: '', uv: 500, pv: 3908, amt: 2000,
        },
        {
            name: '', uv: 2000, pv: 4800, amt: 2181,
        },
        {
            name: '', uv: 250, pv: 3800, amt: 2500,
        },
        {
            name: '', uv: 3490, pv: 4300, amt: 2100,
        },
    ];

    return(
        <div className="paper">
            <ComposedChart
                className="chart"
                width={360}
                height={320}
                data={data}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="amt" fill="#82ca9d" stroke="#212748" />
                <Bar dataKey="pv" barSize={20} fill="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </div>
    )
}

export default ChartComposed;