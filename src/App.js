import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import CourseEditor from "./components/course-editor/course-editor";
import CourseManager from "./components/course-manager";
import Home from "./components/home";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/courses" component={CourseManager}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
