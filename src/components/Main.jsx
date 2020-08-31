import React, { useState, useEffect, useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link, Redirect } from "react-router-dom";
import StudentContext from "../StudentContext.js";
import Modal from "react-modal";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
// import { Pie } from "react-chartjs-2";
import axios from "axios";
import DesiredSkillsChart from "./DesiredSkillsChart.jsx";

const header = [
  "First Name",
  "Last Name",
  "Email",
  "Predefined Skills",
  "Desired Skills",
  "Actions",
];

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const buttonDivStyles = {
  display: "flex",
  justifyContent: "center",
};

const buttonStyles = {
  margin: "1rem",
  padding: "0.5rem",
  border: 0,
  backgroundColor: "white",
};

const Main = (props) => {
  const { desiredData, desiredSkills } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState(null);
  // const [desiredData, setDesiredData] = useState([]);

  const { studentsArray } = useContext(StudentContext);

  Modal.setAppElement();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteStudent = () => {
    setIsOpen(false);
    props.onDeleteCurrentStudent(student);
  };

  const handleEdit = (row, e) => {
    e.preventDefault();
    props.onCurrentStudent(row);
  };

  const handleDelete = (row, e) => {
    e.preventDefault();
    setStudent(row);
    openModal();
  };

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:5000/students/desired_skills")
  //     .then((response) => {
  //       const desired_data = response.data;
  //       console.log(desired_data);
  //       desired_data.map((data) => {
  //         console.log(data);
  //       });
  //       setDesiredData(desired_data);
  //     });
  // }, []);

  return (
    <div>
      <TableContainer
        className="student_table_container"
        style={{ backgroundColor: "white" }}
      >
        {" "}
        <td>
          <Table className="student_table">
            <TableHead>
              <TableRow>
                {header.map((label) => (
                  <TableCell key={label} style={{ fontSize: "1rem" }}>
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsArray.map((row) => (
                <TableRow key={row["Email"]}>
                  <TableCell
                    component={Link}
                    to={`/student/${row["Email"]}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row["First_name"]}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row["Email"]}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row["Last_name"]}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row["Email"]}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row["Email"]}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row["Email"]}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row["Existing_skills"].map((skill) => (
                      <div key={skill}>
                        {skill["Skill"]}, Level {skill["Level"]}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row["Email"]}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row["Desired_skills"]}
                  </TableCell>
                  <TableCell>
                    <button
                      className="action_button"
                      onClick={(e) => handleEdit(row, e)}
                    >
                      <Link to="/edit_student" style={{ color: "black" }}>
                        <EditIcon />
                      </Link>
                    </button>
                    <button
                      className="action_button"
                      id="delete_button"
                      onClick={(e) => handleDelete(row, e)}
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className="action_button"
                      onClick={() => props.onStudentClick(row)}
                    >
                      <Link
                        to={`/student/${row.email}`}
                        style={{ color: "black" }}
                      >
                        <VisibilityIcon />
                      </Link>
                    </button>
                    <Modal
                      isOpen={modalIsOpen}
                      style={customStyles}
                      contentLabel="Modal"
                    >
                      <h2>Are you sure you want to delete this student?</h2>
                      <div style={buttonDivStyles}>
                        <button
                          style={buttonStyles}
                          onClick={() => deleteStudent()}
                        >
                          <DoneIcon />
                        </button>
                        <button
                          style={buttonStyles}
                          onClick={() => closeModal()}
                        >
                          <ClearIcon />
                        </button>
                      </div>
                    </Modal>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </td>
      </TableContainer>
      <DesiredSkillsChart
        desiredData={desiredData}
        desiredSkills={desiredSkills}
      />
    </div>
  );
};
export default Main;
