import React, {useEffect, useState} from 'react';
import quizzesService from '../services/quizzes-service'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseQuizzes = () => {

    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then(quizzes => {
                setQuizzes(quizzes);
            });
    }, [courseId]);

    return(
        <div className='container'>
            <h2>
                <Link to={`/courses/table`}>
                    <i className='fas fa-times'>&nbsp;</i>
                </Link>
                Quizzes
            </h2>
            <div className='list-group'>
            {
                quizzes.map(quiz =>
                    <div className='list-group-item'>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                            {quiz.title}
                        </Link>

                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                            <button type="button"
                                    className="btn btn-success float-right">
                                Start
                            </button>
                        </Link>

                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                            <button type="button"
                                    className="btn btn-link float-right">
                                Show Attempts
                            </button>
                        </Link>

                    </div>
                )
            }

            </div>
        </div>
    );
};

export default CourseQuizzes;