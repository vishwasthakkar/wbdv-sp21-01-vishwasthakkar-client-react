import React, {useEffect} from 'react';
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import TopicActions from "../../actions/topic-actions";

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
        createTopic: (lessonId) => TopicActions.createTopic(dispatch, lessonId),
        updateTopic: (topic) => TopicActions.updateTopic(dispatch, topic),
        deleteTopic: (topic) => TopicActions.deleteTopic(dispatch, topic),
        findTopicsForLesson: (lessonId) => TopicActions.findTopicsForLesson(dispatch, lessonId),
        clearTopic: () => TopicActions.clearTopic(dispatch)
    }
};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(TopicPills);

