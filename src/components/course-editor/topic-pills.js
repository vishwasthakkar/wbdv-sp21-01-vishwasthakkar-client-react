import React from 'react';
import {connect} from "react-redux";

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
        {/*<li className="nav-item">*/}
            {/*<a className="nav-link" aria-current="page" href="#">Topic 1</a>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
            {/*<a className="nav-link active" href="#">Topic 2</a>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
            {/*<a className="nav-link" href="#">Topic 3</a>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
            {/*<a className="nav-link" href="#">Topic 4</a>*/}
        {/*</li>*/}
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

};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(TopicPills);