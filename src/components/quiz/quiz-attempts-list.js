import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import quizzesService from '../../services/quizzes-service';

const QuizAttemptsList = (

) => {
    const {quizId, courseId} = useParams();
    const [attempts, setAttempts] = useState([]);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        quizzesService.findAllAttemptsOfQuiz(quizId)
            .then(attempts => {
                setAttempts(attempts.reverse())
            });

        quizzesService.findQuizById(quizId)
            .then(quiz => setName(quiz.title));

        setLoading(false);

    }, [quizId, courseId]);

    return (
        <div className='container'>
            <h2>
                <Link to={`/courses/${courseId}/quizzes`}>
                    <i className='fas fa-times'>&nbsp;</i>
                </Link>
                {name}
            </h2>
            {
                loading && <h1>Loading ...</h1>
            }
            {
                !loading && <div className='list-group'>
                    {
                        attempts.map((attempt, index) =>
                           <div className={`list-group-item ${index === 0 ? 'bg-primary text-white': ''}`}>
                             <span className='row'>
                                 <h5 className='col-6 text-center'>Attempt {attempts.length - index}</h5>
                                 {
                                     index === 0 ?
                                     <h1 className='col-6 text-center'>{attempt.score}/100</h1> :
                                     <h4 className='col-6 text-center'>{attempt.score}/100</h4>
                                 }
                             </span>
                           </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default QuizAttemptsList;
