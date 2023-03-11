import { IArrNews } from "../reducer/reducer-interface";
import { IAction, IDate } from "./actions-interface";


export const incCounterNews = () :IAction => ({type: 'INC_COUNTER_NEWS'});
export const addNewNews = (objNews: IArrNews) :IAction => ({type: 'ADD_NEW_NEWS', payload: objNews});
export const deleteOldNews = () :IAction => ({type: 'DELETE_OLD_NEWS'});
export const addAllNewsID = (arrNewsID: number[]) :IAction => ({type: 'ADD_ALL_NEWS_ID', payload: arrNewsID});
export const setTargetID = (id: number) :IAction => ({type: 'SET_TARGET_ID', payload: id});
export const setTargetDate = (date: Date) :IAction => ({type: 'SET_TARGET_DATE', payload: date});
export const saveTimeItemBetweenRender = (objDate: IDate) :IAction => ({type: 'SAVE_TIME_ITEM_BETWEEN_RENDER', payload: objDate});
export const setDisabledBtn = (bool: boolean) :IAction => ({type: 'SET_DISABLED_BTN', payload: bool});



