import { createContext } from "react";

const StudentContext = createContext({
  currentStudent: null,
  studentsArray: [],
});

export default StudentContext;
