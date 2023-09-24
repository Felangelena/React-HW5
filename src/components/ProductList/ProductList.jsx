import './ProductList.scss';
import ProductListItem from '../ProductListItem/ProductListItem.jsx';
import { useSelector } from "react-redux";

const ProductList = ({data, hasBtnStar, hasBtnDel, btnTxt}) => {
    const favorites = useSelector((state) => state.data.favorites);

    const listItems = data.map(item => (
        <ProductListItem key={item.id} id={item.id} title={item.title} color={item.color} price={item.price} image={item.image}
        hasBtnStar={hasBtnStar} hasBtnDel={hasBtnDel} btnTxt={btnTxt} isFavorite={favorites.includes(item.id) || false}
        />));

    return (
        <section className="arrivals box">
            <ul className="arrivals__grid">
                {listItems}
            </ul>
        </section>
    )
}

export default ProductList;