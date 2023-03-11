import { IAction, IDate } from "../actions/actions-interface";
import { IState } from "./reducer-interface";



const initialState : IState = {
    arrNewsID: [],
    arrNews: [],
    counterNews: 0,
    targetID: 0,
    targetDate: new Date(),
    crutchTargetDate: [],
    disabledBtn: false,
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
        case 'SET_TARGET_ID':
            return {...state, targetID: action.payload}
        case 'SET_TARGET_DATE': 
            return {...state, targetDate: action.payload}
        case 'SAVE_TIME_ITEM_BETWEEN_RENDER':
            let copy3 = Object.assign([],state.crutchTargetDate);
            copy3.push(action.payload);
            return {...state, crutchTargetDate: copy3}
        case 'SET_DISABLED_BTN':
            return action.payload === true ? {...state,disabledBtn:true} : {...state,disabledBtn: false}
        default: return state;
    }
}




export default reducer;