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
}