import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsService from '../../../../../service/NewsService';
import { errorProcessing } from '../../../../../utils/errorProcessing';
import { incParentCounter,
         resetParentComentsArr, 
         resetParentComentsArrID, 
         resetParentCounter, 
         setParentComentsArr,
         setParentComentsArrID } from '../../../../actions/actions';
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
            const id = String(ParentComentsArrID[counterParentComents]);
            newsService.getComentForId(id)
                .then(res => { dispatch(setParentComentsArr(res))})
                .catch(e => errorProcessing(e));
        }

    //  вот тут я запутался,и пока не понимаю,какие я должен использовать зависимости,чтобы таймер работал корректно.
    // он либо не останавливается,либо вообще не работает
     
    useEffect(() => {
            const timer = setInterval(() => {
                dispatch(incParentCounter());
                console.log(counterParentComents);
                    getParentComents();           
            }, 1000);
            if(counterParentComents >= ParentComentsArrID.length) {
                clearInterval(timer);
            }
            return () => {
                clearInterval(timer);
            }
    }, [counterParentComents,ParentComentsArrID.length]);

    useEffect(() => {
        return () => {
                console.log('размонтирован');
                dispatch(resetParentComentsArrID());
                dispatch(resetParentCounter());
                dispatch(resetParentComentsArr());
        }
    },[])

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


