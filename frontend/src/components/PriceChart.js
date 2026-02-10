import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const PriceChart = ({ data, events, changePoint }) => {
  return (
    <ResponsiveContainer width="100%" height={420}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="Date"
          tick={false}
        />

        <YAxis />
        <Tooltip />

        {/* Price Line */}
        <Line
          type="monotone"
          dataKey="Price"
          stroke="#1976d2"
          dot={false}
        />

        {/* Event Highlight Lines */}
        {events.map((event, index) => (
          <ReferenceLine
            key={index}
            x={event.date || event.Date}
            stroke="red"
            strokeDasharray="3 3"
            label={{
              value: event.event,
              position: "top",
              angle: -90,
              fontSize: 10
            }}
          />
        ))}

        {/* Bayesian Change Point */}
        {changePoint && (
          <ReferenceLine
            x={changePoint}
            stroke="black"
            strokeWidth={2}
            label={{
              value: "Change Point",
              position: "top",
              fontSize: 12
            }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
