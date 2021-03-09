import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        updateCourse,
        deleteCourse
    }) => {

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(course.title);

    const saveCourse = () => {
        setEditing(false);
        const newCourse = {
            ...course,
            title: title
        };
        updateCourse(newCourse)
    };

    return(
        <tr className="course">
            <td className="d-table-cell" style={{width: "50%"}}>
                {
                    !editing &&
                    <span>
                        <a href="#"><i className="fa fa-file">
                            &nbsp;
                        </i></a>
                        <Link to={`/courses/table/edit/${course._id}`}>
                            {course.title}
                        </Link>
                    </span>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className="d-none d-sm-table-cell">
                {course.owner}
            </td>
            <td className="d-none d-lg-table-cell">
                {course.lastModified}
            </td>
            <td  className="d-table-cell">
                <span>
                    {
                        editing &&
                        <span  className="float-right">
                            <i onClick={() => deleteCourse(course)}
                               className="fas fa-trash fa-md">
                                &nbsp;
                            </i>
                            <i onClick={() => saveCourse()}
                               className="fas fa-check fa-md">
                                &nbsp;
                            </i>
                        </span>

                    }
                    {
                        !editing &&
                        <span  className="float-right">
                            <i onClick={() => setEditing(true)} className="fas fa-edit fa-md p-1">
                                &nbsp;
                            </i>
                        </span>
                    }
                </span>
            </td>
        </tr>)
};

export default CourseRow