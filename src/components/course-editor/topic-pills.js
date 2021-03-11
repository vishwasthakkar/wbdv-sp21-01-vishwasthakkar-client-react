import React, {useEffect} from 'react';
import {connect} from "react-redux";
import topicService from "../../services/topic-service";
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';

const TopicPills = ({
    topics=[],
    createTopic,
    deleteTopic,
    updateTopic,
    findTopicsForLesson,
                        clearTopic
}) => {

    const {courseId, moduleId, lessonId, layout, topicId} = useParams();

    useEffect(() => {
        if ((moduleId !== "undefined" && typeof moduleId !== "undefined") &&
            (lessonId !== "undefined" && typeof lessonId !== "undefined")) {
            findTopicsForLesson(lessonId)
        }
        return () => {
            clearTopic()
        }
    }, [moduleId, lessonId])

    return (
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                               <li className="nav-item">
                                   <EditableItem item = {topic}
                                                 deleteItem={deleteTopic}
                                                 updateItem={updateTopic}
                                                 active={topic._id === topicId}
                                                 to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                                 ifTextWhite={false}
                                   />
                               </li>
                )
            }
            <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                    <i onClick={() => {lessonId !== undefined ? createTopic(lessonId) : ''}} className="fas fa-plus-square fa-lg">
                    </i>
                </a>
            </li>
        </ul>);
};

const stateToPropertyMapper = (state) => {
    return{
        topics: state.TopicReducer.topics
    };
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: 'New Topic'})
                .then(topic => dispatch(
                    {
                        type: "CREATE_TOPIC",
                        topic: topic
                    }));
        },
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({type: "UPDATE_TOPIC", topic: topic}))
        },
        deleteTopic: (topic) => {
            topicService.deleteTopic(topic._id)
                .then(status => dispatch({type: "DELETE_TOPIC", topic: topic}))
        },
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                                             type: "FIND_TOPICS_FOR_LESSON",
                                             topics: topics
                                          }))
        },

        clearTopic: () => dispatch({type: "CLEAR_TOPIC"})

    }
};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(TopicPills);

