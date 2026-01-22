import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Red", value: 400 },
  { name: "Blue", value: 300 },
  { name: "Yellow", value: 300 },
  { name: "Green", value: 200 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"];

const Piechart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={200}
      cy={200}
      outerRadius={150}
      dataKey="value"
      label={({ name, percent }) => `${name} ${(percent ?? 0 * 100).toFixed(0)}%`}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default Piechart;
