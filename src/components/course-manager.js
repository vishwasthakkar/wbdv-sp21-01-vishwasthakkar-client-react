import React from 'react';
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import "./course-table/course-list.style.client.css";
import CourseHeader from "./course-header";
import CourseEditor from "./course-editor/course-editor";

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

    addCourse = (newCourse) => {
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse);
                this.setState(this.state);
            });
        document.getElementById("courseInput").value = "";
    };

    render() {
        return(
            <div>
                <Route path={['/courses', '/courses/table']} exact={true} >
                    <CourseHeader addCourse={this.addCourse}/>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid" exact={true} >
                    <CourseHeader addCourse={this.addCourse}/>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                ]}
                       component={CourseEditor}
                       exact={true}
                />
            </div>
        )
    }
}