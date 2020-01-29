import React from 'react'
import "./paperGraphic.css"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    {name: '', uv: 400, pv: 2400, amt: 2400},
    {name: '', uv: 800, pv: 2400, amt: 2400},
    {name: '', uv: 600, pv: 2400, amt: 2400},
    {name: '', uv: 200, pv: 2400, amt: 2400},
    {name: '', uv: 400, pv: 2400, amt: 2400}
];

const PaperGraphic = () => {
    return(
        <div className="paperGraphic">
            <LineChart className="chart" width={770} height={320} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default PaperGraphic;