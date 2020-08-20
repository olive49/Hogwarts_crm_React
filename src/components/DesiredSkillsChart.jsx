import React, { useState, useEffect, useContext } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const DesiredSkillsChart = ({ desiredSkills }) => {
  const [desiredData, setDesiredData] = useState([]);
  const [chartData, setChartData] = useState({});

  const skillName = desiredSkills.map((skill) => {
    return skill.name;
  });

  const chart = () => {
    const labelList = [];
    const dataList = [];
    desiredData.forEach((skill) => {
      labelList.push(skill.Skill);
      dataList.push(skill.Count);
    });
    setChartData({
      labels: skillName,
      options: {
        fontSize: "1.5rem",
        bodyFontSize: "1.5rem",
        response: true,
      },
      datasets: [
        {
          label: labelList,
          data: dataList,
          backgroundColor: [
            "#F3C01A",
            "#265820",
            "#440404",
            "#0C304B",
            "#0A0A0A",
            "#A67B54",
          ],
        },
      ],
    });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/students/desired_skills")
      .then((response) => {
        const desired_data = response.data;
        console.log(desired_data);
        setDesiredData(desired_data);
      });
  }, []);

  useEffect(() => {
    chart();
  }, [desiredData]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ height: "700px", width: "700px" }}>
        <h3 style={{ textAlign: "center" }}>Desired Skills of All Students</h3>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default DesiredSkillsChart;
