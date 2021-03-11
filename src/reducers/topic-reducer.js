const initialState = {
    topics: []
};

const TopicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            };
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    return topic._id !== action.topic._id;
                })
            };
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if(topic._id === action.topic._id) {
                        return action.topic
                    } else {
                        return topic
                    }
                })
            };
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            };

        case "CLEAR_TOPIC":
            return {
                topics: []
            };

        default:
            return state;

    }
};

export default TopicReducer;

