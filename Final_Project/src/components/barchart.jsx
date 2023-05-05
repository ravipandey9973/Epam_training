import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import students from '../studentgrade';

const data = students.reduce((acc, student) => {
    const overallGrade = student.overallGrade.toFixed(1); // Round overallGrade to 1 decimal place
    const index = acc.findIndex((item) => item.overallGrade === overallGrade);
  
    if (index === -1) {
      // If the overall grade doesn't exist in the accumulator array, add it as a new object with a count of 1
      acc.push({ overallGrade, count: 1 });
    } else {
      // If the overall grade already exists in the accumulator array, increment the count
      acc[index].count++;
    }
  
    return acc;
  }, []);

const OverallGradeBarChart = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="overallGrade" label={{ value: "Over All Grade", position: "insideBottomRight", dy: 15 }} />
      <YAxis label={{ value: "No.of Students", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="red" 
        isAnimationActive={false}
        shape={(props) => {
          const { count } = props.payload;
          const barProps = {
            fill: count === 5 ? 'grey' :count ===4?'brown': count ===3?'yellowgreen': count ===1?'pink': '#8884d8',
          };
          return <rect {...props} {...barProps} />;
        }}
      />
    </BarChart>
  );
};

export default OverallGradeBarChart;
