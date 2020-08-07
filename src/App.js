import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AdminSignUp from "./components/AdminSignUp.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AddStudent from "./components/AddStudent.jsx";
import Main from "./components/Main.jsx";
import EditStudent from "./components/EditStudent.jsx";
import StudentData from "./components/StudentData.jsx";
import StudentContext from "./StudentContext.js";

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

const App = () => {
  const [currentStudent, setCurrentStudent] = useState(null);
  const [studentsArray, setStudentsArray] = useState([]);

  const handleCurrentStudent = (student) => {
    setCurrentStudent(student);
  };

  const addStudent = (student) => {
    debugger;
    console.log(student);
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
              onCurrentStudent={(student) => handleCurrentStudent(student)}
            />
          </Route>
          <Route path="/edit_student" exact>
            <EditStudent
              predefinedSkills={predefinedSkills}
              desiredSkills={desiredSkills}
            />
          </Route>
          <Route path="/student/:email" exact>
            <StudentData />
          </Route>
        </Switch>
      </Router>
    </StudentContext.Provider>
  );
};

export default App;
