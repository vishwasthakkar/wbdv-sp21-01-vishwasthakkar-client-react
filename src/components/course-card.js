import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({
    course,
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

    return (
        <div className=
                 "col-12 mb-5
                 col-sm-6 mb-sm-5
                  col-md-4 mb-md-5
                   col-lg-3 mb-lg-5
                    col-xl-2 mb-xl-5">
            <div className="card">
                <img
                    src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                    className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">
                        Some Description
                    </p>
                    <Link to="/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;