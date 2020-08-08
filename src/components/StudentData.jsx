import React, { useState, useEffect, useContext } from "react";
import StudentContext from "../StudentContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Pie } from "react-chartjs-2";

const StudentData = (props) => {
  const { currentStudent, desiredSkills } = props;
  const [chartData, setChartData] = useState({});
  const skillName = desiredSkills.map((skill) => {
    return skill.name;
  });
  const myContext = useContext(StudentContext);

  const chart = () => {
    setChartData({
      labels: skillName,
      options: {
        fontSize: "1.5rem",
        bodyFontSize: "1.5rem",
      },
      datasets: [
        {
          label: "desiredSkills",
          data: [32, 45, 12, 76, 69, 10],
          backgroundColor: ["pink", "red", "green", "blue", "yellow", "orange"],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  const useStyles = makeStyles({
    root: {
      minWidth: 100,
      minHeight: 200,
      textAlign: "center",
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();

  const mockStudent = {
    firstName: "Harry",
    lastName: "Potter",
    email: "harry@hogwarts.com",
    predefinedSkills: [
      { skillName: "Quidditch", skillLevel: 3 },
      { skillName: "Magic", skillLevel: 2 },
    ],
    desiredSkills: "Potionmaking",
  };

  const fullName = mockStudent.firstName + " " + mockStudent.lastName;

  return (
    <div style={{ width: "40%", margin: "4rem auto" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {fullName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {mockStudent.email}
          </Typography>
          <Typography>Skills:</Typography>
          {mockStudent.predefinedSkills.map((skills) => (
            <Typography>
              Predefined: {skills.skillName} level: {skills.skillLevel}
            </Typography>
          ))}
          <Typography>Desired: {mockStudent.desiredSkills}</Typography>
        </CardContent>
      </Card>
      <h3 className="pie_chart_title">Desired Skills of All Students</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default StudentData;
