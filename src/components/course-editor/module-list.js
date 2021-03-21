import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import ModuleActions from "../../actions/module-actions";

const ModuleList = ({
    modules = [],
    createModule,
    deleteModule,
    updateModule,
    findModulesForCourse
}) =>{
    const {layout, moduleId, courseId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, []);
    return (<div>
        <ul className="list-group">
            {
                modules.map(module => {
                    return (
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem item = {module}
                                          deleteItem={deleteModule}
                                          updateItem={updateModule}
                                          to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                          active={module._id === moduleId}
                                          ifTextWhite={true}
                            />
                        </li>
                    )
                })
            }
            <li  onClick={()=>createModule(courseId)} className="list-group-item text-center">
                <i className="fas fa-plus fa-lg">
                    &nbsp;
                </i>
            </li>
        </ul>
    </div>);
};


const stateToPropertyMapper = (state) => {
    return{
        modules: state.ModuleReducer.modules
    };
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createModule: (courseId) => ModuleActions.createModule(dispatch, courseId),
        updateModule: (newModule) => ModuleActions.updateModule(dispatch, newModule),
        deleteModule: (moduleToDelete) => ModuleActions.deleteModule(dispatch, moduleToDelete),
        findModulesForCourse: (courseId) => ModuleActions.findModulesForCourse(dispatch, courseId)
    }
};


export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)(ModuleList);