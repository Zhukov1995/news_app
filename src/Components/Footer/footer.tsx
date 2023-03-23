import './footer.scss';
import './footer.media.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <span className='footer__copyright'>© Zhukov R. V., 2023</span>
            <div className='footer__contacts'>
                <h4>Contacts:</h4>
                <p>Email: <a href='mailto: ro.zhuckov2013@yandex.ru'>ro.zhuckov2013@yandex.ru</a></p>
                <p>Tel: <a href='tel: +79776499526'>89776499526</a></p>
            </div>
        </div>
    )
}

export default Footer;