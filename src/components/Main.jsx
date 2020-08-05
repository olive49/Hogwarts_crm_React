import React, { useState, useEffect } from "react";
import { useTable } from "react-table";

const Main = () => {
  const data = React.useMemo(
    () => [
      {
        firstName: "Harry",
        lastName: "Potter",
        email: "Harry@Hogwarts.com",
        predefinedSkills: "Quidditch: level 3",
        desiredSkills: "Potion Making",
      },
      {},
      {},
      {},
      {},
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Predefined Skills",
        accessor: "predefinedSkills",
      },
      {
        Header: "Desired Skills",
        accessor: "desiredSkills",
      },
    ],
    []
  );

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = tableInstance;

  const handleEdit = (data) => {
    console.log(data);
  };

  const handleRemove = (data) => {
    console.log(data);
  };

  return (
    <div style={{ border: "2px solid black" }}>
      <table {...getTableProps()} className="student_table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="table_header">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  console.log(cell);
                  return (
                    <td {...cell.getCellProps()} className="table_rows">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <button
                  className="student_table_button"
                  onClick={(e) => handleEdit(e.target)}
                >
                  Edit
                </button>
                <button
                  className="student_table_button"
                  onClick={(e) => handleRemove(e.target)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
