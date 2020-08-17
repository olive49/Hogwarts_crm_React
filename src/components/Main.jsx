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
import { Pie } from "react-chartjs-2";

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
  const { rows, desiredSkills, desiredData } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState(null);
  const [chartData, setChartData] = useState({});

  const skillName = desiredSkills.map((skill) => {
    return skill.name;
  });

  const chart = () => {
    const labelList = [];
    const dataList = [];
    desiredData.forEach((skill) => {
      labelList.push(skill.Skill);
      dataList.push(skill.Count);
    });
    console.log(labelList);
    console.log(dataList);
    setChartData({
      labels: skillName,
      options: {
        fontSize: "1.5rem",
        bodyFontSize: "1.5rem",
        response: true,
      },
      datasets: [
        {
          label: labelList,
          data: dataList,
          backgroundColor: ["pink", "red", "green", "blue", "yellow", "orange"],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

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
    console.log(row);
    setStudent(row);
    openModal();
  };

  return (
    <div>
      {/* <TableContainer
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
            {rows.map((row) =>
              row.existing_magic_skills.map((existing_skill) => (
                <TableRow key={row.email}>
                  <TableCell
                    component={Link}
                    to={`/student/${row.email}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row.first_name}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row.email}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row.last_name}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row.email}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row.email}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {existing_skill.skill}, Level:
                    {existing_skill.level}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/student/${row.email}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => props.onStudentClick(row)}
                  >
                    {row.desired_magic_skills}
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
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "700px", width: "700px" }}>
          <h3 style={{ textAlign: "center" }}>
            Desired Skills of All Students
          </h3>
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};
export default Main;
