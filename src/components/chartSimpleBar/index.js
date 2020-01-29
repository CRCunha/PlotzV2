import React from 'react'
import "./chartSimpleBar.css"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';


const ChartSimpleBar = () => {

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

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map(i => i.uv));
        const dataMin = Math.min(...data.map(i => i.uv));
        
        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }
        return dataMax / (dataMax - dataMin);
    };
    
    const off = gradientOffset();

    return(
        <div className="paper">
            <BarChart 
                className="chart"
                width={360}
                height={320}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

export default ChartSimpleBar;