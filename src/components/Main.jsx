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

const header = [
  "First Name",
  "Last Name",
  "Email",
  "Predefined Skills",
  "Desired Skills",
  "Actions",
];

const Main = (props) => {
  const { rows } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  // const myContext = useContext(StudentContext);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteStudent = (row) => {
    setIsOpen(false);
    props.onDeleteCurrentStudent(row);
  };

  const handleEdit = (row, e) => {
    e.preventDefault();
    props.onCurrentStudent(row);
  };

  const handleDelete = (row, e) => {
    e.preventDefault();
    console.log(row);
    openModal();
  };

  return (
    <TableContainer
      className="student_table_container"
      style={{ backgroundColor: "white" }}
    >
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
                onClick={() => props.onStudentClick(row)}
              >
                {row.firstName}
              </TableCell>
              <TableCell
                component={Link}
                to={`/student/${row.email}`}
                onClick={() => props.onStudentClick(row)}
              >
                {row.lastName}
              </TableCell>
              <TableCell
                component={Link}
                to={`/student/${row.email}`}
                onClick={() => props.onStudentClick(row)}
              >
                {row.email}
              </TableCell>
              <TableCell
                component={Link}
                to={`/student/${row.email}`}
                onClick={() => props.onStudentClick(row)}
              >
                {row.predefinedSkills.skillName} Level:
                {row.predefinedSkills.skillLevel}
              </TableCell>
              <TableCell
                component={Link}
                to={`/student/${row.email}`}
                onClick={() => props.onStudentClick(row)}
              >
                {row.desiredSkills}
              </TableCell>
              <TableCell>
                <button onClick={(e) => handleEdit(row, e)}>
                  <Link to="/edit_student">
                    <EditIcon />
                  </Link>
                </button>
                <button onClick={(e) => handleDelete(row, e)}>
                  <DeleteIcon />
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  // onAfterOpen={}
                  // onRequestClose={}
                  // style={}
                  contentLabel="Modal"
                >
                  <h2>Are you sure you want to delete this student?</h2>
                  <button onClick={() => deleteStudent(row)}>yes</button>
                  <button onClick={() => closeModal()}>no</button>
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
