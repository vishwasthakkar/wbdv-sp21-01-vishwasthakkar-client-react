import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import CourseEditor from "./components/course-editor";
import CourseTable from "./components/course-table";
import CourseGrid from "./components/course-grid";
import CourseManager from "./components/course-manager";
import Home from "./components/home";


function App() {
  return (
      <BrowserRouter>
        <div>
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/courses/table" component={CourseTable}/>*/}
          {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
          <Route path="/editor" component={CourseEditor}/>
          {/*<Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}
          {/*<div className="container-fluid">*/}
          {/*  <CourseManager/>*/}
          {/*  <CourseEditor/>*/}
          {/*</div>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
