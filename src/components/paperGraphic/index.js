import React from 'react'
import "./paperGraphic.css"

import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    {name: '', uv: 400, pv: 300, amt: 500},
    {name: '', uv: 500, pv: 400, amt: 400},
    {name: '', uv: 500, pv: 500, amt: 600},
    {name: '', uv: 400, pv: 700, amt: 700},
    {name: '', uv: 300, pv: 600, amt: 700}
];

const PaperGraphic = () => {
    return(
        <div className="paperGraphic">
            <AreaChart
                className="chart"
                width={770}
                height={320}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </div>
    )
}

export default PaperGraphic;