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

const header = [
  "First Name",
  "Last Name",
  "Email",
  "Predefined Skills",
  "Desired Skills",
  "Actions",
];

const Main = (props) => {
  const [currentStudent, setCurrentStudent] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const myContext = useContext(StudentContext);

  const rows = [
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
  ];
  // const rows = myContext.studentsArray;

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log(myContext);
  });

  const deleteStudent = (row) => {
    setIsOpen(false);
    // console.log(row);
  };

  const handleEdit = (row, e) => {
    e.preventDefault();
    // console.log(row);
    props.onCurrentStudent(row);
  };

  const handleDelete = (row, e) => {
    e.preventDefault();
    console.log(row);
    setCurrentStudent(row);
    openModal();
  };

  return (
    <TableContainer className="student_table_container">
      <Table className="student_table">
        <TableHead>
          <TableRow>
            {header.map((label) => (
              <TableCell style={{ fontSize: "1rem" }}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.email}>
              <TableCell
                component="th"
                scope="row"
                component={Link}
                to={`/student/${row.email}`}
              >
                {row.firstName}
              </TableCell>
              <TableCell component={Link} to={`/student/${row.email}`}>
                {row.lastName}
              </TableCell>
              <TableCell component={Link} to={`/student/${row.email}`}>
                {row.email}
              </TableCell>
              <TableCell component={Link} to={`/student/${row.email}`}>
                {row.predefinedSkills.skillName} Level_
                {row.predefinedSkills.skillLevel}
              </TableCell>
              <TableCell component={Link} to={`/student/${row.email}`}>
                {row.desiredSkills}
              </TableCell>
              <TableCell>
                <button onClick={(e) => handleEdit(row, e)}>
                  <Link to="/edit_student">Edit</Link>
                </button>
                <button onClick={(e) => handleDelete(row, e)}>Delete</button>
                <Modal
                  isOpen={modalIsOpen}
                  // onAfterOpen={}
                  // onRequestClose={}
                  // style={}
                  contentLabel="Example Modal"
                >
                  <h2>Are you sure you want to delete this student?</h2>
                  <button onClick={() => deleteStudent(row)}>yes</button>
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Main;
