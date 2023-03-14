import { IArrNews, IComent } from "../reducer/reducer-interface";
import { IAction, IDate } from "./actions-interface";


export const incCounterNews = () :IAction => ({type: 'INC_COUNTER_NEWS'});
export const resetCounterNews = () :IAction => ({type: 'RESET_COUNTER_NEWS'});
export const setFlagCounterNews = (bool: boolean) :IAction => ({type: 'SET_FLAG_COUNTER_NEWS', payload: bool});
export const incParentCounter = () :IAction => ({type: 'INC_PARENT_COUNTER'});
export const resetParentCounter = () :IAction => ({type: 'RESET_PARENT_COUNTER'});
export const addNewNews = (objNews: IArrNews) :IAction => ({type: 'ADD_NEW_NEWS', payload: objNews});
export const deleteOldNews = () :IAction => ({type: 'DELETE_OLD_NEWS'});
export const addAllNewsID = (arrNewsID: number[]) :IAction => ({type: 'ADD_ALL_NEWS_ID', payload: arrNewsID});
export const setTargetID = (id: number) :IAction => ({type: 'SET_TARGET_ID', payload: id});
export const setTargetDate = (date: Date) :IAction => ({type: 'SET_TARGET_DATE', payload: date});
export const setParentComentsArrID = (arr: number[]) :IAction => ({type: 'SET_PARENT_COMENTS_ARR_ID', payload: arr});
export const resetParentComentsArrID = () :IAction => ({type: 'RESET_PARENT_COMENTS_ARR_ID'});
export const setChildrenComentsID = (arr: number[]) :IAction => ({type: 'SET_CHILDREN_COMENTS_ID', payload: arr});
export const setParentComentsArr = (obj: IComent) :IAction => ({type: 'SET_PARENT_COMENTS_ARR', payload: obj});
export const resetParentComentsArr = () :IAction => ({type: 'RESET_PARENT_COMENTS_ARR'});
export const setChildrenComentsArr = (arr: number[]) :IAction => ({type: 'SET_CHILDREN_COMENTS_ARR', payload: arr});
export const setCrutchTargetDateArr = (objDate: IDate) :IAction => ({type: 'SET_CRUTCH_TARGET_DATE_ARR', payload: objDate});
export const resetCrutchTargetDateArr = () :IAction => ({type: 'RESET_CRUTCH_TARGET_DATE_ARR'});
export const setDisabledBtn = (bool: boolean) :IAction => ({type: 'SET_DISABLED_BTN', payload: bool});



