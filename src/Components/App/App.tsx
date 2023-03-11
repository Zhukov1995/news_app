import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllNewsID } from '../actions/actions';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import NewsList from '../NewsList/news-list';
import NewsService from '../../service/NewsService';
import { errorProcessing } from '../../utils/errorProcessing';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import ItemPage from '../ItemPage/item-page';
import { IState } from '../reducer/reducer-interface';

function App() {
  const newsService = new NewsService();
  const targetID = useSelector<IState,number>(state => state.targetID);
  const dispatch = useDispatch();

  useEffect(() => {
    newsService.getNewAndTopNews()
      .then(res => dispatch(addAllNewsID(res)))
      .catch(e => errorProcessing(e));
  }, []);



  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<NewsList />}/>
        <Route path='/item' element={<ItemPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
