import './news-list.scss';
import NewsListItem from './NewsListItem/news-list-item';
import NewsService from '../../service/NewsService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewNews, deleteOldNews, incCounterNews, resetCounterNews, setFlagCounterNews } from '../actions/actions';
import { IArrNews, IState } from '../reducer/reducer-interface';
import { errorProcessing } from '../../utils/errorProcessing';


const NewsList = () => {
    const arrNews = useSelector<IState, IArrNews[]>(state => state.arrNews);
    const arrID = useSelector<IState, number[]>(state => state.arrNewsID);
    const counterNews = useSelector<IState, number>(state => state.counterNews);
    const flagCounter = useSelector<IState,boolean>(state => state.flagCounterNews);
    const dispatch = useDispatch();

    const newsService = new NewsService();

    // функция принимает в себя массив с идентификаторами,делает по нему запрос и записывает в state
    const getNewsEveryMinute = (arrID: number[]) => {
        let Id = String(arrID[counterNews]);
        newsService.getNewsForId(Id)
            .then(res => dispatch(addNewNews(res)))
            .catch(e => errorProcessing(e));
    }

    // запускаем таймер где каждую минуту будет появляться новая новость
    // когда доходим до 100 новостей,начинаем удалять последние,если достигаем лимита новостей 498,обнуляем counter и дальше показываем новости
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(incCounterNews());
            getNewsEveryMinute(arrID);
            if (counterNews > 100 || flagCounter && counterNews <= 498) dispatch(deleteOldNews());
            if(counterNews === 498) {
                dispatch(resetCounterNews());
                dispatch(setFlagCounterNews(true));
            }
        }, 60000);
        return () => {
            clearInterval(timer);
        }
    }, [counterNews]);
    
    const showNewsList: JSX.Element[] = arrNews.filter(item => item !== null).map(item => {
        return <NewsListItem {...item} key={item.id}/>
    });


    return (
        <ul className="news_list">
            {showNewsList}
            {counterNews > 498 ? <h4 className='news_list__end'>That's all the news for today...</h4> : null}
        </ul>
    )
}

export default NewsList;