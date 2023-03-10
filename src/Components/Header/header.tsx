import './header.scss';
import Logo from './logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNews, deleteOldNews } from '../actions/actions';
import NewsService from '../../service/NewsService';
import { IState } from '../reducer/reducer-interface';
import { errorProcessing } from '../../utils/errorProcessing';
import { useState } from 'react';

const Header =  () => {
    const dispatch = useDispatch();
    const newsService = new NewsService();
    const counterNews = useSelector<IState, number>(state => state.counterNews);
    const arrID = useSelector<IState, number[]>(state => state.arrNewsID);
    const [copyCounter,setCopyCounter] = useState<number>(counterNews);


    const updateList = (arrID: number[]) => {
        let targetId = String(arrID[copyCounter]);
        newsService.getNewsForId(targetId)
        .then(res => dispatch(addNewNews(res)))
        .catch(e => errorProcessing(e));
        dispatch(deleteOldNews());
        if(copyCounter < 498) {
            setCopyCounter(prev => prev + 1);
        }
        
    }

    return (
        <div className='header'>
            <img src={Logo} className="header__logo"/>
            <button className='header__btn' onClick={() => updateList(arrID)}>Update List News</button>
        </div>
    )
}

export default Header;
