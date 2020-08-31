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
import Print from "./utils.js";
import { predefinedSkills2 } from "./predefinedSkills.json";
import { desiredSkills2 } from "./desiredSkills.json";

const App = () => {
  const [currentStudent, setCurrentStudent] = useState(null);
  const [studentsArray, setStudentsArray] = useState([]);
  const [rows, setRows] = useState([]);
  const [desiredData, setDesiredData] = useState([]);

  const print = new Print();
  const baseUrl = "http://127.0.0.1:5000/";

  const getStudents = () => {
    axios
      .get(`${baseUrl}students`)
      .then((response) => {
        const students_db = response.data;
        console.log(students_db);
        console.log(typeof students_db);
        setStudentsArray(students_db);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const getDesiredSkills = () => {
    axios
      .get(`${baseUrl}students/desired_skills`)
      .then((response) => {
        const desired_data = response.data;
        console.log(desired_data);
        console.log(typeof desired_data);
        setDesiredData(desired_data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getDesiredSkills();
  }, []);

  const handleCurrentStudent = (student) => {
    setCurrentStudent(student);
  };

  const handleEditStudent = (data, desired) => {
    console.log(data, desired);
    // axios
    //   .post(`/students/edit/${currentStudent.email}`, {
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     email: data.email,
    //     // existing_magic_skills: predefined,
    //     // desired_magic_skills: desired,
    //   })
    //   .then((response) => {
    //     alert(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleDeleteStudent = (student) => {
    const newRows = studentsArray.filter((a) => a["Email"] != student["Email"]);
    setStudentsArray(newRows);
    axios
      .delete(`${baseUrl}students/delete/${student["Email"]}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStudentClick = (student) => {
    setCurrentStudent(student);
  };

  const addStudent = (student) => {
    setStudentsArray((studentsArray) => [student, ...studentsArray]);
  };

  return (
    <StudentContext.Provider
      value={{ currentStudent, studentsArray, print, desiredData, baseUrl }}
    >
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
              predefinedSkills={predefinedSkills2}
              desiredSkills={desiredSkills2}
              onAddStudent={(student) => addStudent(student)}
            />
          </Route>
          <Route path="/main" exact>
            <Main
              desiredSkills={desiredSkills2}
              onCurrentStudent={(student) => handleCurrentStudent(student)}
              onDeleteCurrentStudent={(student) => handleDeleteStudent(student)}
              onStudentClick={(student) => handleStudentClick(student)}
              rows={rows}
              desiredData={desiredData}
            />
          </Route>
          <Route path="/edit_student" exact>
            <EditStudent
              predefinedSkills={predefinedSkills2}
              desiredSkills={desiredSkills2}
              // mockStudent={mockStudent}
              onEditStudent={(data, desired) =>
                handleEditStudent(data, desired)
              }
            />
          </Route>
          <Route path="/student/:email" exact>
            <StudentData
              currentStudent={currentStudent}
              desiredSkills={desiredSkills2}
            />
          </Route>
        </Switch>
      </Router>
    </StudentContext.Provider>
  );
};

export default App;
