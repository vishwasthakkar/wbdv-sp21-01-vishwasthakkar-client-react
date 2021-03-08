import React from 'react';
import {connect} from "react-redux";

const ModuleList = ({modules=[]}) =>
    <div>
        <h2>Module List {modules.length}</h2>
        <ul className="list-group">
            {
                modules.map(module => {
                    return (
                        <li className="list-group-item">
                            {module.title}
                            <i className="fas fa-times fa-lg float-right">
                                &nbsp;
                            </i>
                        </li>
                    )
                })
            }
            {/*<li className="list-group-item active">Module 1 - jQuery*/}
                {/*<i className="fas fa-times fa-lg float-right">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">Module 2 - React*/}
                {/*<i className="fas fa-times fa-lg float-right">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">Module 3 - Redux*/}
                {/*<i className="fas fa-times fa-lg float-right">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">Module 4 - Native*/}
                {/*<i className="fas fa-times fa-lg float-right">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">Module 5 - Angular*/}
                {/*<i className="fas fa-times fa-lg float-right">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">Module 6 - Node*/}
                {/*<i className="fas fa-times fa-lg float-right">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">Module 7 - Mongo*/}
                {/*<i className="fas fa-times fa-lg float-right">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
            {/*<li className="list-group-item text-center">*/}
                {/*<i className="fas fa-plus fa-lg">*/}
                    {/*&nbsp;*/}
                {/*</i>*/}
            {/*</li>*/}
        </ul>
    </div>;

const stateToPropertyMapper = (state) => {
    return{
        modules: state.ModuleReducer.modules
    };
};

const dispatchToPropertyMapper = (dispatch) => {

};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(ModuleList);