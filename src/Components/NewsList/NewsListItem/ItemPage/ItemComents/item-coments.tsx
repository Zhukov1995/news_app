import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsService from '../../../../../service/NewsService';
import { errorProcessing } from '../../../../../utils/errorProcessing';
import {
    incParentCounter,
    resetParentComentsArr,
    resetParentComentsArrID,
    resetParentCounter,
    setParentComentsArr
} from '../../../../actions/actions';
import { IComent, IState } from '../../../../reducer/reducer-interface';
import './item-coments.scss';
import './item-coments.media.scss';



const ItemComents = () => {
    const ParentComentsArrID = useSelector<IState, number[]>(state => state.ParentComentsArrID);
    const ParentComentsArr = useSelector<IState, IComent[]>(state => state.ParentComentsArr);
    const counterParentComents = useSelector<IState, number>(state => state.counterParentComents);
    const dispatch = useDispatch();
    const newsService = new NewsService();

    // функция получает id коментария,делает по нему запрос и записывает в массив 
    const getParentComents = () => {
        const id = String(ParentComentsArrID[counterParentComents]);
        newsService.getComentForId(id)
            .then(res => { dispatch(setParentComentsArr(res)) })
            .catch(e => errorProcessing(e));
    }


    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(incParentCounter());
            getParentComents();
        }, 1500);
        if (counterParentComents >= ParentComentsArrID.length) {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        }
    }, [counterParentComents, ParentComentsArrID.length]);

    useEffect(() => {
        return () => {
            dispatch(resetParentComentsArrID());
            dispatch(resetParentCounter());
            dispatch(resetParentComentsArr());
        }
    }, [])

    const showComentsList = ParentComentsArr.map((item, index) => {
        const date = new Date();
        const dateString = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
        return <li className='coments__list__parent' key={index}>
            <p className='list_parent__author'>Author: {item?.by || null}</p>
            <p className='list_parent__text'>{item?.text}</p>
            <p>Date: {dateString}</p>
        </li>
    })

    return (
        <div className='item_coments'>
            <div className='item_coments__title'>
                <h3>Coments</h3>
                <span>Total: {ParentComentsArrID.length}</span>
            </div>
            <ul className='item_coments__list'>
                {ParentComentsArrID.length ?
                    showComentsList
                    :
                    <h3 className='no_coments'>No coments...</h3>
                }
            </ul>
        </div>
    )
}

export default ItemComents;


