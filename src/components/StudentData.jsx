import React, { useContext } from "react";
import StudentContext from "../StudentContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const StudentData = ({ currentStudent }) => {
  console.log(currentStudent);

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

  const fullName =
    currentStudent["First_name"] + " " + currentStudent["Last_name"];

  return (
    <div style={{ width: "40%", margin: "4rem auto" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {fullName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {currentStudent["Email"]}
          </Typography>
          <Typography>Skills:</Typography>
          <Typography>
            {currentStudent["Existing_skills"].map((skill) => (
              <div>
                {skill["Skill"]} level: {skill["Level"]}
              </div>
            ))}
          </Typography>
          <Typography>Desired: {currentStudent["Desired_skills"]}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentData;
