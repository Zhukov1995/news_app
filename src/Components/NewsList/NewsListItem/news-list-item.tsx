import { useEffect, useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { IArrNews, IState } from '../../reducer/reducer-interface';
import { useDispatch, useSelector } from 'react-redux';
import { setDisabledBtn, setTargetDate, setTargetID, setCrutchTargetDateArr, resetCounterNews} from '../../actions/actions';
import { Link } from 'react-router-dom';
import { IDate } from '../../actions/actions-interface';
import './news-list-item.scss';
import './new-list-item.media.scss';

const NewsListItem = ({ title, score, by, id}: IArrNews) => {
    const crutchTargetDate = useSelector<IState, IDate[]>(state => state.crutchTargetDate);
    const counterNews = useSelector<IState,number>(state => state.counterNews);
    const dispatch = useDispatch();
    const [localTime,setLocalTime] = useState(new Date());

    // костыль для времени новостного поста, в данном API нет корректного времени, пришлось делать костыль,и придумывать как перекидывать время между рендерами
    useEffect(() => {
        const findCopyItem = crutchTargetDate.filter(item => item.id === id);
        if(findCopyItem.length <1) {
            const objDate: IDate = {id, date: new Date()}
            dispatch(setCrutchTargetDateArr(objDate));
        } else {
            crutchTargetDate.forEach(item => {
                if(item?.id === id) {
                    setLocalTime(item.date);
                } 
            })
        }
        dispatch(setDisabledBtn(false));
    },[])

    useEffect(() => {
        if(counterNews === 498) {
            dispatch(resetCounterNews());
        }
    },[])

    const setTargetInfo = () => {
        dispatch(setTargetID(id));
        dispatch(setTargetDate(localTime));
    }

    return (
        <Link to='/item'>
        <li className='news_list_item' onClick={() => setTargetInfo()}>
            <div className='news_list_item__title'>
                <h3>{title}</h3>
                <span>Rating: {score}</span>
            </div>
            <div className='news_list_item__author'>
                <span>Author: {by}</span>
                <span>Date: <ReactTimeAgo date={localTime} locale="en-US" /></span>
            </div>
        </li>
        </Link>
    )
}

export default NewsListItem;