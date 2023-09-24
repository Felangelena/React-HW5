import PropTypes from "prop-types";
import './ProductListItem.scss';
import {ReactComponent as Star} from './icons/star.svg';
import Button from '../Button/Button.jsx';
import { useDispatch } from "react-redux";
import { openModalAC, toogleFavoritesAC } from '../../store/actions';

const ProductListItem = (props) => {
    const {id, title, color, price, image, isFavorite, hasBtnStar, hasBtnDel, btnTxt} = props;
    const dispatch = useDispatch();
    const openModal = () => dispatch(openModalAC(id));
    const toogleFavorites = () => dispatch(toogleFavoritesAC(id));

    return (
        <li className="card">
            {hasBtnStar && <div className="card__favorite"><Star className={isFavorite ? "star active" : "star"} onClick={toogleFavorites}/></div>}
            {hasBtnDel && <div className="card__delete" onClick={openModal}>X</div>}
            <img className="card__img" src={image} alt={title} />
            <h3 className="card__title">{title}</h3>
            <p className="card__color">Color: {color}</p>
            <p className="card__price">${price}</p>
            <Button className="card__btn" backgroundColor="black" text={btnTxt} handleClick={openModal}/>
        </li>
    )
}

ProductListItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

ProductListItem.defaultProps = {
    color: "black",
    image: "image don't exist",
}

export default ProductListItem;