const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
};
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
};

const submitQuiz = (quizId, questions) => {
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
};


export default {
    findAllQuizzes, findQuizById, submitQuiz
}
