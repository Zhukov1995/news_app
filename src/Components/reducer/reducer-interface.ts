import { IDate } from "../actions/actions-interface"

export interface IArrNews {
    by: string,
    descendants : number,
    id : number,
    kids : number[],
    score : number,
    time : number,
    title : string,
    type : string,
    url : string
}

export interface IState {
    arrNewsID: number[],
    arrNews: IArrNews[]
    counterNews: number,
    flagCounterNews: boolean,
    counterParentComents: number;
    targetID: number,
    targetDate: Date,
    ParentComentsArrID: number[],
    ChildrenComentsArrID: number[],
    ParentComentsArr: IComent[],
    ChildrenComentsArr: IComent[],
    crutchTargetDate: IDate[],
    disabledBtn: boolean,
}



export interface IComent {
    by: string,
    id: number,
    kids?: number[],
    parent: number,
    text: string,
    time: number,
    type: string,
}