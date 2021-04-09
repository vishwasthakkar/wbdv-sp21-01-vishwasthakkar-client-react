import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import questionsService from '../services/questions-service'
import quizzesService from '../services/quizzes-service'

const Quiz = () => {
    const {quizId} = useParams();
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState([]);

    useState(() => {


        quizzesService.findQuizById(quizId)
            .then(quiz => setName(quiz.title));

        questionsService.findQuestionsForQuiz(quizId)
            .then(questions => console.log(questions));

    }, [quizId]);

    return(
        <h1>
            {/*fekfpefjfepj*/}
            {name}
            {questions}
        </h1>
    );

};

export default Quiz;