import lessonService from "../services/lesson-service";

export const CREATE_LESSON = "CREATE_LESSON";
export const UPDATE_LESSON = "UPDATE_LESSON";
export const DELETE_LESSON = "DELETE_LESSON";
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE";
export const CLEAR_LESSON = "CLEAR_LESSON";

export const createLesson = (dispatch, moduleId) => {
    lessonService.createLesson(moduleId, {title: 'New Lesson'})
        .then(lesson => dispatch(
            {
                type: "CREATE_LESSON",
                lesson: lesson
            }));
};

export const updateLesson = (dispatch, lesson) => {
    lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
                                     type: "UPDATE_LESSON",
                                     lesson: lesson
                                 }))
};
export const deleteLesson = (dispatch, lesson) => {
    lessonService.deleteLesson(lesson._id)
        .then(status => dispatch({
                                     type: "DELETE_LESSON",
                                     lesson: lesson
                                 }))
};

export const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then(theLessons => dispatch({
                                         type: "FIND_LESSONS_FOR_MODULE",
                                         lessons: theLessons
                                     }))
};

export const clearLesson = (dispatch) => dispatch({type: "CLEAR_LESSON"});

const LessonActions = {
    createLesson,
    updateLesson,
    deleteLesson,
    findLessonsForModule,
    clearLesson
};

export default LessonActions;
