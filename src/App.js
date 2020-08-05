import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AdminSignUp from "./components/AdminSignUp.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AddStudent from "./components/AddStudent.jsx";
import Main from "./components/Main.jsx";

const App = () => {
  return (
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
          <AddStudent />
        </Route>
        <Route path="/main" exact>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
