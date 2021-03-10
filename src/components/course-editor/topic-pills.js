import React from 'react';
import {connect} from "react-redux";
import topicService from "../../services/topic-service";

const TopicPills = ({topics=[]}) =>
    <ul className="nav nav-pills">
        {
            topics.map(topic =>
               <li className="nav-item">
                   <a className="nav-link" aria-current="page" href="#">
                       {topic.title}
                   </a>
               </li>
            )
        }
        <li className="nav-item">
            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                <i className="fas fa-plus-square fa-lg"></i>
            </a>
        </li>
    </ul>;


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
        findTopicsForCourse: (lessonId) => {
            topicService.findTopicsForCourse(lessonId)
                .then(topics => dispatch({
                                              type: "FIND_TOPICS_FOR_LESSON",
                                             topics: topics
                                          }))
        }

    }
};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(TopicPills);