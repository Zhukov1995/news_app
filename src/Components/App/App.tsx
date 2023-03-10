import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAllNewsID } from '../actions/actions';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import NewsList from '../NewsList/news-list';
import NewsService from '../../service/NewsService';
import { errorProcessing } from '../../utils/errorProcessing';


import './App.scss';

function App() {
  const newsService = new NewsService();
  const dispatch = useDispatch();

  useEffect(() =>{
    newsService.getNewAndTopNews()
      .then(res => dispatch(addAllNewsID(res)))
      .catch(e => errorProcessing(e));
  },[]);



  return (
    <div className='wrapper'>
        <Header/>
        <NewsList/>
        <Footer/>
    </div>
  );
}

export default App;
