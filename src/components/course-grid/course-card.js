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

                    {
                        !editing &&
                        <span>
                            {/*<a href="#"><i className="fa fa-file">*/}
                                {/*&nbsp;*/}
                            {/*</i></a>*/}
                            {/*<h5 className="card-title">{course.title}</h5>*/}

                            {/*<Link to="/editor">*/}
                                <h5 className="card-title">{course.title}</h5>
                            {/*</Link>*/}
                        </span>
                    }
                    {
                        editing &&
                        <input
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}/>
                    }
                    <p className="card-text">
                        Some Description
                    </p>
                    <Link to="/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                    <span>
                        {
                            editing &&
                            <span  className="float-right">
                                <i onClick={() => {
                                    setEditing(false);
                                    deleteCourse(course);
                                }}
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
                </div>
            </div>
        </div>
    );
};

export default CourseCard;