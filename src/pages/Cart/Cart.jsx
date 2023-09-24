import ProductList from '../../components/ProductList/ProductList.jsx';
import Button from '../../components/Button/Button.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import FormikForm from '../../components/OrderForm/FormikForm.jsx';
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCartAC, closeModalAC } from '../../store/actions';

const Cart = () => {
    const dispatch = useDispatch();
    const deleteFromCart = () => dispatch(deleteFromCartAC(id));
    const closeModal = () => dispatch(closeModalAC());

    const isOpen = useSelector((state) => state.data.openModal);
    const id = useSelector((state) => state.data.id);
    const data = useSelector((state) => state.data.data);
    const cart = useSelector((state) => state.data.cart);
    const selected = data.filter(({id}) => cart.includes(id));

    return (
        <>
            <ProductList data={selected} hasBtnStar={false} hasBtnDel={true}
            btnTxt="delete"/>
            {isOpen && <Modal header="Delete item?" isCloseButton={true} text="Do you want to delete this item from the cart?" close={closeModal}
            actions={[
                <Button key="1" className={'modal__btn'} backgroundColor="maroon" text="Ok" handleClick={deleteFromCart}/>,
                <Button key="2" className={'modal__btn'} backgroundColor="maroon" text="Cancel" handleClick={closeModal}/>
            ]} />
            }
            <FormikForm/>
        </>
    );
}

export default Cart;