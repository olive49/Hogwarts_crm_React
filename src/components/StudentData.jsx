import React, { useState, useEffect, useContext } from "react";
import StudentContext from "../StudentContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const StudentData = (props) => {
  console.log(props);
  const myContext = useContext(StudentContext);

  const useStyles = makeStyles({
    root: {
      minWidth: 100,
      minHeight: 200,
      textAlign: "center",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  //   console.log(myContext.currentStudent);
  //   console.log(myContext.currentStudent.firstName);

  const mockStudent = {
    firstName: "Harry",
    lastName: "Potter",
    email: "harry@hogwarts.com",
    predefinedSkills: [
      { skillName: "Quidditch", skillLevel: 3 },
      { skillName: "Magic", skillLevel: 2 },
    ],
    desiredSkills: "Potionmaking, Basketball",
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
    </div>
  );
};

export default StudentData;
