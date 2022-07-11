/* reducer file */
// all reducer files will basically work this way

// this module imports all the action types...
import * as ActionTypes from './ActionTypes';

// then exports the campsites reducer which takes the campsite section of the state and initializes it with the default function param syntax if it hasnt already been initialized
export const campsites = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => { // it then takes the action that was dispatched to it and depending on what the action is, it creates and returns a new state - or if no action matches, it returns the previous state without doing anything to it
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};