
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          {/*<Route path="/courses" component={CourseManager}/>*/}
          {/*<Route path="/editor" component={CourseEditor}/>*/}
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
