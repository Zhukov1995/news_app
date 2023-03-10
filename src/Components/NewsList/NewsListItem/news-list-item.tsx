import './news-list-item.scss';
import { useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { IArrNews } from '../../reducer/reducer-interface';

const NewsListItem = ({title,score,by}: IArrNews) => {
    
    const [localTime] = useState(new Date());

    return (
        <li className='news_list_item'>
        <div className='news_list_item__title'>
            <h3>{title}</h3>
            <span><b>Rating:</b> {score}</span>
        </div>
        <div className='news_list_item__author'>
            <span><b>Author:</b> {by}</span>
            <span><b>Date:</b> <ReactTimeAgo date={localTime} locale="en-US"/></span>
        </div>
    </li>
    )
}

export default NewsListItem;