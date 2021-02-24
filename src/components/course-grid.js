import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";
import {updateCourse} from "../services/course-service";

const CourseGrid = (
    {
        courses,
        saveCourse,
        deleteCourse
    }) =>
    <div className="container-fluid">
        <div className="row p-2">
            <div className="col d-none d-md-block">
                <b>
                    Recent Documents
                </b>
            </div>
            <div className="col d-none d-md-block">
                <span>
                    <b>
                        Owned by me
                        <i className="fa fa-lg fa-sort-down"></i>
                    </b>
                </span>
            </div>
            <div className="col">
                <span className="float-right">
                    <i className="fas fa-folder fa-lg mr-3"></i>
                    <i className="fas fa-sort-alpha-up-alt fa-lg mr-3"></i>
                    <Link to="/courses/table">
                        <i className="fas fa-list fa-lg mr-3"></i>
                    </Link>
                </span>
            </div>
        </div>
        <div className="card-deck">
            {
                courses.map(course => <CourseCard
                                    course={course}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                /> )
            }
        </div>
    </div>;

export default CourseGrid