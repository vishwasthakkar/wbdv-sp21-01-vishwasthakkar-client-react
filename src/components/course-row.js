import React, {useState} from 'react'
import {Link} from "react-router-dom";
import course from "./course-list.style.client.css";

const CourseRow = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
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
            <td className="d-table-cell">
                <a href="#"><i className="fa fa-file">&nbsp;</i></a>
                &nbsp;
                {
                    !editing &&
                    <Link to="/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className="d-none d-md-table-cell">
                {course.owner}
            </td>
            <td className="d-none d-lg-table-cell">
                {course.lastModified}
            </td>
            <td  className="d-table-cell">
                <span className="pl-5">
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-md p-1"></i>
                    {
                        editing &&
                        <i onClick={() => saveCourse()} className="fas fa-check fa-md p-1"></i>
                    }

                    {
                        !editing &&
                        <i onClick={() => setEditing(true)} className="fas fa-edit fa-md p-1"></i>
                    }
                </span>

            </td>
        </tr>)
};

export default CourseRow