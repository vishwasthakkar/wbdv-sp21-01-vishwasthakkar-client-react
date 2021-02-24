const COURSES_URL  = 'https://wbdv-generic-server.herokuapp.com/api/001380619/courses';

export const createCourse = (course) => {
    return fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
};

export const findAllCourses = () => {
    return fetch(COURSES_URL)
        .then(response => response.json())
};

export const updateCourse = (courseId, course) => {
    return fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())
};

export const deleteCourse = (courseId) => {
    return fetch(`${COURSES_URL}/${courseId}`,
                 {method: 'DELETE'})
        .then(response => response.json())
};

export const findCourseById = (courseId) => {
    fetch(`${COURSES_URL}/${courseId}`,{
        method: 'GET'
    })
        .then(response => response.json())
};

export default {
    createCourse,
    findAllCourses,
    findCourseById,
    updateCourse,
    deleteCourse
}


