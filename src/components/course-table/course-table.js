import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th className="d-none d-sm-table-cell">
                                Owned by
                                <i className="fa fa-sort-down"></i>
                            </th>
                            <th className="d-none d-lg-table-cell">
                                Last modified
                            </th>
                            <th>
                                <span className="float-right">
                                    <i className="fas fa-folder fa-lg mr-3"></i>
                                    <i className="fas fa-sort-alpha-up-alt fa-lg mr-3"></i>
                                    <Link to="/courses/grid">
                                        <i className="fa fa-th fa-lg mr-3"></i>
                                    </Link>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.courses.map(course =>
                                                       <CourseRow
                                                           key={course._id}
                                                           deleteCourse={this.props.deleteCourse}
                                                           updateCourse={this.props.updateCourse}
                                                           course={course}
                                                           title={course.title}
                                                           lastModified={course.lastModified}
                                                           owner={course.owner}/>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}