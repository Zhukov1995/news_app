import { countReset } from 'console';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsService from '../../../../../service/NewsService';
import { errorProcessing } from '../../../../../utils/errorProcessing';
import { incParentCounter,
         resetParentComentsArr, 
         resetParentCounter, 
         setParentComentsArr,
         setParentComentsID } from '../../../../actions/actions';
import { IComent, IState } from '../../../../reducer/reducer-interface';
import './item-coments.scss';



const ItemComents = () => {
    const ParentComentsArrID = useSelector<IState, number[]>(state => state.ParentComentsArrID);
    const ParentComentsArr = useSelector<IState, IComent[]>(state => state.ParentComentsArr);
    const counterParentComents = useSelector<IState, number>(state => state.counterParentComents);
    const dispatch = useDispatch();
    const newsService = new NewsService();

    // функция получает id коментария,делает по нему запрос и записывает в массив 
    const getParentComents = () => {
        if(ParentComentsArrID.length > 0) {
            const id = String(ParentComentsArrID[counterParentComents]);
            console.log(id);
            newsService.getComentForId(id)
                .then(res => {
                    if(res !== undefined) {
                        dispatch(incParentCounter());
                        dispatch(setParentComentsArr(res))
                    } else {
                        console.log('Error');
                    }
                    
                } )
                .catch(e => errorProcessing(e));
        }
    }


    useEffect(() => {
        if(ParentComentsArrID.length) {
            const timer = setInterval(() => {
                console.log('interval')
                getParentComents();
                if(ParentComentsArrID.length === ParentComentsArr.length) {
                    clearInterval(timer);
                    console.log('stop!!!')
                    console.log(ParentComentsArrID.length > ParentComentsArr.length)
                }
            }, 4000);
            
            return () => {
                // clearInterval(timer);
                dispatch(resetParentComentsArr());
                dispatch(setParentComentsID([]));
                dispatch(resetParentCounter());
            }
        }
    }, [ParentComentsArrID.length,ParentComentsArr.length,counterParentComents]);

    const showComentsList = ParentComentsArr.map((item,index) => {
        return <li className='coments__list__parent' key={index}>
            <p className='list_parent__author'><b>Author:</b> {item?.by || null}</p>
            <p className='list_parent__text'>{item?.text}</p>
            <p><b>Date:</b> 26.02.2023</p>
        </li>
    })

    return (
        <div className='item_coments'>
            <div className='item_coments__title'>
                <h3>Coments</h3>
                <span><b>Total</b> {ParentComentsArrID.length}</span>
            </div>
            <ul className='item_coments__list'>
                {showComentsList}
            </ul>
        </div>
    )
}

export default ItemComents;


