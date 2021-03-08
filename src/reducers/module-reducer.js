const initialState = {
    modules: [
        {_id: "123", title: "XYZ"},
        {_id: "456", title: "ABC"}
    ]
};

const ModuleReducer = (state=initialState, action) => {
    return state;
    // switch (action.type) {
    //
    //     case "FIND_MODULES_FOR_COURSE":
    //         return {
    //             ...state,
    //             modules: action.modules
    //         };
    //
    //     case "CREATE_MODULE":
    //         return {
    //             modules: [
    //                 ...state.modules,
    //                 action.module
    //             ]
    //         };
    //
    //     case "DELETE_MODULE":
    //         return {
    //             modules: state.modules.filter(module => {
    //                 return module._id !== action.moduleToDelete._id;
    //             })
    //         };
    //
    //     case "UPDATE_MODULE":
    //         return {
    //             modules: state.modules.map(module => {
    //                 if (module._id === action.moduleToUpdate._id) {
    //                     return action.moduleToUpdate
    //                 } else {
    //                     return module
    //                 }
    //             })
    //         };
    //
    //     default:
    //         return state
    // }
};

export default ModuleReducer;