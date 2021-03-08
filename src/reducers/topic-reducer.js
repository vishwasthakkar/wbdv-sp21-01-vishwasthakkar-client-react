const initialState = {
    topics: [
        {_id: "123", title: "XYZ"},
        {_id: "456", title: "ABC"}
    ]
};

const TopicReducer = (state=initialState, action) => {
    return state;
};


export default TopicReducer;