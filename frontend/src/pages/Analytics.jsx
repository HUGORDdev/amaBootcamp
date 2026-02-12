import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

const Analytics = ({ score=0 }) => {
  const data = [
    {
      name: "Risk",
      value: score,
      fill:
        score < 40
          ? "#4CAF50"
          : score < 70
          ? "#FF9800"
          : "#F44336"
    }
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />

          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
          />

          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            {score}%
          </text>

          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "14px" }}
          >
            Risk Score
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
