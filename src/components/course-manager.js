import React from 'react';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import "./course-list.style.client.css";

export default class CourseManager
    extends React.Component {
    state = {
        courses: []
    };

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState};
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    });
                    return nextState
                })
            })
    };

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    };

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/10/2021"
        };
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    };

    render() {
        return(
            <div>
                <div className="wbdv-sticky-top"  style={{marginTop: '10px'}}>
                    <div className="row">
                        <div className="col-1 ml-4">
                            <i className="fa fa-bars fa-lg"></i>
                        </div>
                        <div className="col-2 d-none d-lg-block">
                            <h4>
                                Course Manager
                            </h4>
                        </div>
                        <div className="col col-lg-7">
                            <input className="form-control" placeholder="New Course Title"/>
                        </div>
                        <div className="col-1 mr-4 ml-lg-4">
                            <button type="button"
                                    className="btn btn-danger skeleton-add-button"
                                    onClick={this.addCourse}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <button type="button"
                        className="btn btn-danger btn-circle-float wbdv-sticky-bottom"
                        onClick={this.addCourse}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>

                {/*<Link to="/">*/}
                    {/*<i className="fas fa-2x fa-home float-right"></i>*/}
                {/*</Link>*/}
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>*/}
                    {/*Add Course*/}
                {/*</button>*/}

                <Route path={['/courses', '/courses/table']} exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true} >
                    <CourseGrid courses={this.state.courses}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
            </div>
        )
    }
}