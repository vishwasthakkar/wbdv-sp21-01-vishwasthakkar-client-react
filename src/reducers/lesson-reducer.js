const initialState = {
    lessons: []
};

const LessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            };

        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            };

        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    return lesson._id !== action.lesson._id;
                })
            };

        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })
            };

        default:
            return state;

    }
};


export default LessonReducer;