const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/vishwasthakkar/lessons";
const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/vishwasthakkar/modules";


export const createLesson = (courseId, lesson) =>
    fetch(`${MODULES_URL}/${courseId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findLessonsForModule = (courseId) =>
    fetch(`${LESSONS_URL}/${courseId}/lessons`)
        .then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export const findLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`)
        .then(response => response.json());

const api = {
    createLesson,
    findLessonsForModule,
    deleteLesson,
    updateLesson,
    findLesson
};

export default api;