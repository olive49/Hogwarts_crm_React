import { createContext } from "react";

const StudentContext = createContext({
  currentStudent: null,
  studentsArray: [],
  desiredData: [],
  baseUrl: null,
});

export default StudentContext;
