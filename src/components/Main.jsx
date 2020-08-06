import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

function createData(
  firstName,
  lastName,
  email,
  predefinedSkills,
  desiredSkills
) {
  return { firstName, lastName, email, predefinedSkills, desiredSkills };
}

const rows = [
  createData(
    "Harry",
    "Potter",
    "harry@hogwarts.com",
    "Quidditch: Level 3",
    "Potionmaking"
  ),
];

const header = [
  "First Name",
  "Last Name",
  "Email",
  "Predefined Skills",
  "Desired Skills",
  "Actions",
];

const Main = () => {
  const [student, setStudent] = useState([]);

  const handleEdit = (row, e) => {
    debugger;
    e.preventDefault();
    console.log(row);
    setStudent(row);
  };

  const handleDelete = (row, e) => {
    e.preventDefault();
    console.log(row);
    setStudent(row);
  };

  useEffect(() => {}, [student]);

  return (
    <TableContainer className="student_table_container">
      <Table className="student_table">
        <TableHead>
          <TableRow>
            {header.map((label) => (
              <TableCell style={{ fontSize: "1.2rem" }}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.predefinedSkills}</TableCell>
              <TableCell>{row.desiredSkills}</TableCell>
              <TableCell>
                <button onClick={(e) => handleEdit(row, e)}>
                  <Link to="/edit_student">Edit</Link>
                </button>
                <button onClick={(e) => handleDelete(row, e)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Main;
