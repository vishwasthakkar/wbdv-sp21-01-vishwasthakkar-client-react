import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import questionsService from '../../services/questions-service';
import quizzesService from '../../services/quizzes-service';

import GenericQuestion from './questions/generic-question';

const Quiz = () => {
    const {quizId, courseId} = useParams();
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        quizzesService.findQuizById(quizId)
            .then(quiz => setName(quiz.title));

        questionsService.findQuestionsForQuiz(quizId)
            .then(receivedQuestions => setQuestions(receivedQuestions));

    }, [quizId]);

    return(
        <div className='container'>
            <h2>
                <Link to={`/courses/${courseId}/quizzes`}>
                    <i className='fas fa-times'>&nbsp;</i>
                </Link>
                {name}
            </h2>
            <div className='list-group'>
                {
                    questions.map(question =>
                        <div className='list-group-item'>
                            <GenericQuestion
                                question={question}
                                questions={questions}
                                setQuestions={setQuestions}
                            />
                        </div>
                    )
                }
            </div>
            <div className='d-block'>

                    <button className='btn btn-danger w-100'
                            onClick={() => {
                                quizzesService.submitQuiz(quizId, questions);
                                setTimeout(
                                    () => {
                                        window.location.href=`/courses/${courseId}/quizzes/${quizId}/attempts`;
                                    },
                                    500
                                );
                            }}>
                        Submit
                    </button>

            </div>
        </div>
    );

};

export default Quiz;