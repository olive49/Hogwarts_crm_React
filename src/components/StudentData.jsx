import React, { useContext } from "react";
import StudentContext from "../StudentContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const StudentData = (props) => {
  const { currentStudent, desiredSkills } = props;

  const myContext = useContext(StudentContext);

  console.log(myContext.currentStudent);

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

  const fullName = currentStudent.firstName + " " + currentStudent.lastName;

  return (
    <div style={{ width: "40%", margin: "4rem auto" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {fullName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {currentStudent.email}
          </Typography>
          <Typography>Skills:</Typography>
          <Typography>
            Predefined: {currentStudent.predefinedSkills.skillName} level:{" "}
            {currentStudent.predefinedSkills.skillLevel}
          </Typography>
          <Typography>Desired: {currentStudent.desiredSkills}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentData;
