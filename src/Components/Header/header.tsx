import { useDispatch, useSelector } from 'react-redux';
import { addNewNews, deleteOldNews } from '../actions/actions';
import NewsService from '../../service/NewsService';
import { IState } from '../reducer/reducer-interface';
import { errorProcessing } from '../../utils/errorProcessing';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import './header.media.scss';

const Header = () => {
    const dispatch = useDispatch();
    const newsService = new NewsService();
    const counterNews = useSelector<IState, number>(state => state.counterNews);
    const disabledBtn = useSelector<IState, boolean>(state => state.disabledBtn);
    const arrID = useSelector<IState, number[]>(state => state.arrNewsID);
    const [copyCounter, setCopyCounter] = useState<number>(counterNews);


    const updateList = (arrID: number[]) => {
        let targetId = String(arrID[copyCounter]);
        newsService.getNewsForId(targetId)
            .then(res => dispatch(addNewNews(res)))
            .catch(e => errorProcessing(e));
        if (copyCounter > 100) dispatch(deleteOldNews());
        if (copyCounter < 498) setCopyCounter(prev => prev + 1);
        window.scrollTo(0,0);
    }

    const classBtn = disabledBtn ? 'header__btn__disabled' : 'header__btn' ;

    return (
        <div className='header'>
            <Link to='/'><h1 className="header__logo">Hacker_News_</h1></Link>
            <button 
                className={classBtn}
                onClick={() => updateList(arrID)} 
                disabled={disabledBtn}
                >Update List News</button>
            
        </div>
    )
}

export default Header;
