import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import students from '../studentgrade';

const PieChartComponent = () => {
  const data = [
    { title: "Pass", value: students.filter(s => s.overallGrade >= 4).length, color: "#4CAF50" },
    { title: "Fail", value: students.filter(s => s.overallGrade < 4).length, color: "#F44336" },
  ];

  return (
    <PieChart
      data={data}
      lineWidth={10}
      paddingAngle={5}
      label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
      labelStyle={{ fontSize: "4px", fontFamily: "sans-serif" }}
    />
  );
};

export default PieChartComponent;
