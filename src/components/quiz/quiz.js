import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';

import questionsService from '../../services/questions-service';
import quizzesService from '../../services/quizzes-service';

import GenericQuestion from './questions/generic-question';

const Quiz = () => {
    const {quizId, courseId} = useParams();
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState([]);
    let history = useHistory();

    useEffect(() => {

        quizzesService.findQuizById(quizId)
            .then(quiz => setName(quiz.title));

        questionsService.findQuestionsForQuiz(quizId)
            .then(receivedQuestions => setQuestions(receivedQuestions));

    }, [quizId]);

    const handleNavigation = () => {
        history.push(`/courses/${courseId}/quizzes/${quizId}/attempts`);
    };

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
                            quizzesService.submitQuiz(quizId, questions).then(
                                res => handleNavigation()
                            );
                        }}>
                    Submit
                </button>

            </div>
        </div>
    );

};

export default Quiz;