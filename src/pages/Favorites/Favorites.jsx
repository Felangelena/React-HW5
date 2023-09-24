import ProductList from '../../components/ProductList/ProductList.jsx';
import Button from '../../components/Button/Button.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { useSelector, useDispatch } from "react-redux";
import { addToCartAC, closeModalAC } from '../../store/actions';

const Favorites = () => {
    const dispatch = useDispatch();
    const addToCart = () => dispatch(addToCartAC(id));
    const closeModal = () => dispatch(closeModalAC());

    const isOpen = useSelector((state) => state.data.openModal);
    const id = useSelector((state) => state.data.id);
    const data = useSelector((state) => state.data.data);
    const favorites = useSelector((state) => state.data.favorites);
    const selected = data.filter(({id}) => favorites.includes(id));

    return (
        <>
            <ProductList data={selected} hasBtnStar={true} hasBtnDel={false} btnTxt="Add to cart"/>
            {isOpen && <Modal header="Add item" isCloseButton={true} text="Do you want add item to the cart?" close={closeModal}
            actions={[
                <Button key="1" className={'modal__btn'} backgroundColor="maroon" text="Ok" handleClick={addToCart}/>,
                <Button key="2" className={'modal__btn'} backgroundColor="maroon" text="Cancel" handleClick={closeModal}/>
            ]} />
            }
        </>
    );
}

export default Favorites;