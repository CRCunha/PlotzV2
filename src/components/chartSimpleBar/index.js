import React from "react";
import "./chartSimpleBar.css";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";


const ChartSimpleBar = () => {
  const data = [
    {
      name: "", uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: "", uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: "", uv: 1000, pv: 9800, amt: 2290,
    },
    {
      name: "", uv: 500, pv: 3908, amt: 2000,
    },
    {
      name: "", uv: 2000, pv: 4800, amt: 2181,
    },
    {
      name: "", uv: 250, pv: 3800, amt: 2500,
    },
    {
      name: "", uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="paper">
      <ResponsiveContainer>
        <BarChart
          className="chart"
          data={data}
          margin={{
            top: 5, right: 20, bottom: 25, left: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSimpleBar;
