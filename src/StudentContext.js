import { createContext } from "react";

const StudentContext = createContext({
  currentStudent: null,
  studentsArray: [],
  desiredData: [],
});

export default StudentContext;
