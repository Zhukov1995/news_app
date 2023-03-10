import { IArrNews } from "../reducer/reducer-interface";

export interface IAction {
    type: string,
    payload?: any
}

export const incCounterNews = () :IAction => ({type: 'INC_COUNTER_NEWS'});
export const addNewNews = (objNews: IArrNews) :IAction => ({type: 'ADD_NEW_NEWS', payload: objNews});
export const deleteOldNews = () :IAction => ({type: 'DELETE_OLD_NEWS'});
export const addAllNewsID = (arrNewsID: number[]) :IAction => ({type: 'ADD_ALL_NEWS_ID', payload: arrNewsID});

