import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import { IArrNews, IState } from '../../../reducer/reducer-interface';
import { setDisabledBtn, setParentComentsArrID } from '../../../actions/actions';
import ItemComents from './ItemComents/item-coments';
import './item-page.scss';
import './item-page.media.scss';

const ItemPage = () => {
    const [targetNews,setTargetNews] = useState<IArrNews>();
    const targetDate = useSelector<IState,Date>(state => state.targetDate);
    const arrNews = useSelector<IState,IArrNews[]>(state => state.arrNews);
    const targetID = useSelector<IState,number>(state => state.targetID);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        arrNews.forEach(item => {
            if(item?.id === targetID) {
                setTargetNews(item);
                if(item.kids !== undefined) {
                    console.log(item.kids);
                    dispatch(setParentComentsArrID(item.kids));
                }
            }
        });
        dispatch(setDisabledBtn(true));
    },[])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    return (
        <div className='item_page'>
            <div className='item_page__wrapper'>
                <Link to='/'><span className='item_page__back'>&#8617; back</span></Link>
                <div className='item_page__title'>
                    <h3>{targetNews?.title}</h3>
                    <span>Rating: {targetNews?.score}</span>
                </div>
                <div className='item_page__author'>
                    <span>Author: {targetNews?.by}</span>
                    <span>Date: <ReactTimeAgo date={targetDate} locale="en-US" /></span>
                </div>
                <a className='item_page__url' href={targetNews?.url}>Link to the source</a>
                <ItemComents/>
            </div>
        </div>
    )
}

export default ItemPage;