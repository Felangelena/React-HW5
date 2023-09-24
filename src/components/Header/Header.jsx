import './Header.scss';
import {ReactComponent as Logo} from './icons/logo.svg';
import {ReactComponent as Favorites} from './icons/favorites.svg';
import {ReactComponent as Cart} from './icons/cart.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({pageName}) => {

    const cart = useSelector((state) => state.data.cart);
    const favorites = useSelector((state) => state.data.favorites);

    return (
        <header className='header box'>
            <div className='header__box'>
                <Link to="/">
                    <Logo className='logo'/>
                </Link>
                <Link to="/favorites">
                    <Favorites className='favorites'/><span className='favorites-num'>{favorites.length}</span>
                </Link>
                <Link to="/cart">
                    <Cart className='cart'/><span className='cart-num'>{cart.length}</span>
                </Link>
            </div>
            <h1 className='header__title'>{pageName.substring(1)}</h1>
        </header>
    );
}

export default Header;