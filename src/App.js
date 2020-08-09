import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AdminSignUp from "./components/AdminSignUp.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AddStudent from "./components/AddStudent.jsx";
import Main from "./components/Main.jsx";
import EditStudent from "./components/EditStudent.jsx";
import StudentData from "./components/StudentData.jsx";
import StudentContext from "./StudentContext.js";
import axios from "axios";

const predefinedSkills = [
  {
    skill: "predefined_potionMaking",
    name: "Potion Making",
    rating: "predefined_potionMaking_rating",
  },
  {
    skill: "predefined_spells",
    name: "Spells",
    rating: "predefined_spells_rating",
  },
  {
    skill: "predefined_quidditch",
    name: "Quidditch",
    rating: "predefined_quidditch_rating",
  },
  {
    skill: "predefined_apparate",
    name: "Apparate",
    rating: "predefined_apparate_rating",
  },
  {
    skill: "predefined_metamorphmagi",
    name: "Metamorphmagi",
    rating: "predefined_metamorphmagi_rating",
  },
  {
    skill: "desired_parseltongue",
    name: "Parseltongue",
    rating: "predefined_parseltongue_rating",
  },
];

const desiredSkills = [
  {
    skill: "desired_potionMaking",
    name: "Potion Making",
  },
  {
    skill: "desired_spells",
    name: "Spells",
  },
  {
    skill: "desired_quidditch",
    name: "Quidditch",
  },
  {
    skill: "desired_apparate",
    name: "Apparate",
  },
  {
    skill: "desired_metamorphmagi",
    name: "Metamorphmagi",
  },
  {
    skill: "desired_parseltongue",
    name: "Parseltongue",
  },
];

const mockStudent = {
  firstName: "Harry",
  lastName: "Potter",
  email: "harry@hogwarts.com",
  predefinedSkills: { skillName: "Quidditch", skillLevel: 3 },
  desiredSkills: "Potionmaking",
};

const mockData = [
  {
    firstName: "Harry",
    lastName: "Potter",
    email: "harry@hogwarts.com",
    predefinedSkills: { skillName: "Quidditch", skillLevel: 3 },
    desiredSkills: "Potionmaking",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    email: "hermione@hogwarts.com",
    predefinedSkills: { skillName: "Potionmaking", skillLevel: 5 },
    desiredSkills: "Quidditch",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    email: "ron@hogwarts.com",
    predefinedSkills: { skillName: "Potionmaking", skillLevel: 5 },
    desiredSkills: "Quidditch",
  },
];
const App = () => {
  const [currentStudent, setCurrentStudent] = useState(null);
  const [studentsArray, setStudentsArray] = useState([]);
  const [rows, setRows] = useState(mockData);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCurrentStudent = (student) => {
    setCurrentStudent(student);
  };

  const handleDeleteStudent = (student) => {
    const newRows = rows.filter((a) => a.email != student.email);
    setRows(newRows);
  };

  const handleStudentClick = (student) => {
    setCurrentStudent(student);
  };

  const addStudent = (student) => {
    setStudentsArray((studentsArray) => [student, ...studentsArray]);
  };
  return (
    <StudentContext.Provider value={{ currentStudent, studentsArray }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/admin_signup" exact>
            <AdminSignUp />
          </Route>
          <Route path="/admin_login" exact>
            <AdminLogin />
          </Route>
          <Route path="/add_student" exact>
            <AddStudent
              predefinedSkills={predefinedSkills}
              desiredSkills={desiredSkills}
              onAddStudent={(student) => addStudent(student)}
            />
          </Route>
          <Route path="/main" exact>
            <Main
              desiredSkills={desiredSkills}
              onCurrentStudent={(student) => handleCurrentStudent(student)}
              onDeleteCurrentStudent={(student) => handleDeleteStudent(student)}
              onStudentClick={(student) => handleStudentClick(student)}
              rows={rows}
            />
          </Route>
          <Route path="/edit_student" exact>
            <EditStudent
              predefinedSkills={predefinedSkills}
              desiredSkills={desiredSkills}
              mockStudent={mockStudent}
            />
          </Route>
          <Route path="/student/:email" exact>
            <StudentData
              currentStudent={currentStudent}
              desiredSkills={desiredSkills}
            />
          </Route>
        </Switch>
      </Router>
    </StudentContext.Provider>
  );
};

export default App;
