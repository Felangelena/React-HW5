
import {ErrorMessage, Field, Form, Formik} from "formik";
import { useSelector, useDispatch } from "react-redux";
import './FormikForm.scss';
import orderValidationSchema from "./validationSchema.js";
import { clearCartAC } from '../../store/actions';

const FormikForm = () => {
    const initialValues = {
        name: "",
        surname: "",
        age: "",
        address: "",
        phone: ""
    }

    const dispatch = useDispatch();
    const clearCart = () => dispatch(clearCartAC());

    const data = useSelector((state) => state.data.data);
    const cart = useSelector((state) => state.data.cart);
    const ordered = data.filter(({id}) => cart.includes(id));

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        console.log({...values, ordered});
        clearCart();
        resetForm(initialValues);
        setSubmitting(false);
    };

    const validationSchema = orderValidationSchema();

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({isSubmitting}) => (
                <Form className="form box">
                    <h2 className="display-3 form__title">Order Form</h2>

                    <div className="form__inputs">
                        <Field className="form-control" type="text" name="name" placeholder="Name"/>
                        <ErrorMessage className={"error"} name="name" component="div"/>

                        <Field className="form-control" type="text" name="surname" placeholder="Surname"/>
                        <ErrorMessage className={"error"} name="surname" component="div"/>

                        <Field className="form-control" type="number" name="age" placeholder="Age"/>
                        <ErrorMessage className={"error"} name="age" component="div"/>

                        <Field className="form-control" type="text" name="address" placeholder="Delivery address"/>
                        <ErrorMessage className={"error"} name="address" component="div"/>

                        <Field className="form-control" type="tel" name="phone" placeholder="Phone"/>
                        <ErrorMessage className={"error"} name="phone" component="div"/>
                    </div>

                    <input className="btn btn-dark" type="submit" value="Checkout" disabled={isSubmitting}/>
                </Form>
            )}
        </Formik>
    )
}

export default FormikForm;