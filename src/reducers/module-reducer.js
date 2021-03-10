const initialState = {
    modules: []
};

const ModuleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            console.log(state.modules);
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.moduleToCreate
                ]
            };
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => {
                    return module._id !== action.moduleToDelete._id;
                })
            };
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if(module._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            };
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            };

        default:
            return state;

    }
};

export default ModuleReducer;