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
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="d-table-cell">
                                Title
                            </th>
                            <th className="d-none d-md-table-cell">
                                Owned by
                                <i className="fa fa-sort-down"></i>
                            </th>
                            <th className="d-none d-lg-table-cell">
                                Last modified
                            </th>
                            <th className="d-block right-fixed">
                                <i className="fas fa-folder fa-2x mr-3"></i>
                                <i className="fas fa-sort-alpha-up-alt fa-2x mr-3"></i>
                                <Link to="/courses/grid">
                                    <i className="fa fa-th fa-2x mr-3"></i>
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS5610" owner="me"/>*/}
                    {/*<CourseRow title="CS3200" owner="you"/>*/}
                    {/*<CourseRow title="CS5200" owner="him"/>*/}
                    {/*<CourseRow title="CS4550" owner="she"/>*/}
                    {/*{*/}
                        {/*this.props.courses.map(course =>*/}
                                                   {/*<CourseRow*/}
                                                       {/*key={course._id}*/}
                                                       {/*deleteCourse={this.props.deleteCourse}*/}
                                                       {/*updateCourse={this.props.updateCourse}*/}
                                                       {/*course={course}*/}
                                                       {/*title={course.title}*/}
                                                       {/*lastModified={course.lastModified}*/}
                                                       {/*owner={course.owner}/>)*/}
                    {/*}*/}
                    </tbody>
                </table>
            </div>
        )
    }
}