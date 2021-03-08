const initialState = {
    lessons: [
        {_id: "123", title: "XYZ"},
        {_id: "456", title: "ABC"}
    ]
};

const LessonReducer = (state=initialState, action) => {
    return state;
};


export default LessonReducer;