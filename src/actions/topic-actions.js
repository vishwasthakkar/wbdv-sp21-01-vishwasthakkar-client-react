import topicService from "../services/topic-service";

export const CREATE_WIDGET = "CREATE_TOPIC";
export const UPDATE_WIDGET = "UPDATE_TOPIC";
export const DELETE_WIDGET = "DELETE_TOPIC";
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";
export const CLEAR_TOPIC = "CLEAR_TOPIC";

export const createTopic = (dispatch, lessonId) => {
    topicService.createTopic(lessonId, {title: 'New Topic'})
        .then(topic => dispatch(
            {
                type: "CREATE_TOPIC",
                topic: topic
            }));
};

export const updateTopic = (dispatch, topic) => {
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({type: "UPDATE_TOPIC", topic: topic}))
};

export const deleteTopic = (dispatch, topic) => {
    topicService.deleteTopic(topic._id)
        .then(status => dispatch({type: "DELETE_TOPIC", topic: topic}))
};

export const findTopicsForLesson = (dispatch, lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
                                     type: "FIND_TOPICS_FOR_LESSON",
                                     topics: topics
                                 }))
};

export const clearTopic = (dispatch) => dispatch({type: "CLEAR_TOPIC"});


const TopicActions = {
    createTopic,
    updateTopic,
    deleteTopic,
    findTopicsForLesson,
    clearTopic
};

export default TopicActions;
