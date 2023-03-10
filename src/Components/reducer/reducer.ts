import { IAction } from "../actions/actions"
import { IState } from "./reducer-interface";



const initialState : IState = {
    arrNewsID: [],
    arrNews: [],
    counterNews: 0,
}

const reducer = (state = initialState,action: IAction) => {
    switch(action.type){
        case 'INC_COUNTER_NEWS':
            return {...state, counterNews: state.counterNews + 1}
        case 'ADD_NEW_NEWS':
            let copy1 = Object.assign([],state.arrNews);
            copy1.unshift(action.payload);
            return {...state, arrNews: copy1}
        case 'DELETE_OLD_NEWS':
            let copy2 = Object.assign([],state.arrNews);
            copy2.pop();
            return {...state, arrNews: copy2}
        case 'ADD_ALL_NEWS_ID': 
            return {...state, arrNewsID: action.payload}
        default: return state;
    }
}




export default reducer;