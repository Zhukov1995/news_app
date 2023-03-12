import { IAction, IDate } from "../actions/actions-interface";
import { IState } from "./reducer-interface";



const initialState : IState = {
    arrNewsID: [],
    arrNews: [],
    counterNews: 0,
    counterParentComents: 0,
    targetID: 0,
    targetDate: new Date(),
    ParentComentsArrID: [],
    ChildrenComentsArrID: [],
    ParentComentsArr: [],
    ChildrenComentsArr: [],
    crutchTargetDate: [],
    disabledBtn: false,
}

const reducer = (state = initialState,action: IAction) => {
    switch(action.type){
        case 'INC_COUNTER_NEWS':
            return {...state, counterNews: state.counterNews + 1}
        case 'INC_PARENT_COUNTER':
            return {...state, counterParentComents: state.counterParentComents + 1}
        case 'RESET_PARENT_COUNTER':
            return {...state, counterParentComents: 0}
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
        case 'SET_PARENT_COMENTS_ID':
            return {...state, ParentComentsArrID: action.payload}
        case 'SET_CHILDREN_COMENTS_ID':
            return {...state, ChildrenComentsArrID: action.payload}
        case 'SET_PARENT_COMENTS_ARR':
            let copy3 = Object.assign([],state.ParentComentsArr);
            copy3.unshift(action.payload);
            return {...state, ParentComentsArr: copy3}
        case 'RESET_PARENT_COMENTS_ARR': 
            return {...state, ParentComentsArr: []}
        case 'SET_CHILDREN_COMENTS_ARR':
            let copy4 = Object.assign([],state.ChildrenComentsArr);
            copy4.push(action.payload);
            return {...state, ChildrenComentsArr: copy4}
        case 'SAVE_TIME_ITEM_BETWEEN_RENDER':
            let copy5 = Object.assign([],state.crutchTargetDate);
            copy5.push(action.payload);
            return {...state, crutchTargetDate: copy5}
        case 'SET_DISABLED_BTN':
            return action.payload === true ? {...state,disabledBtn:true} : {...state,disabledBtn: false}
        default: return state;
    }
}




export default reducer;