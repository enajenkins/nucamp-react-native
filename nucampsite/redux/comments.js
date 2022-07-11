import * as ActionTypes from './ActionTypes';
// default params
export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
      // reducers that get called when you dispatch an action
      case ActionTypes.ADD_COMMENT:
        // I need to spend WAY more time understanding this data flow
        action.payload.id = state.comments.length;
        return {...state, errMess: null, comments: [...state.comments, action.payload]};

        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};