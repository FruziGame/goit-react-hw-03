import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css"


export default function ContactForm({addContact}) {


    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^\d+$/, "Field is not a number").min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    });
    
    const initialValues = {
        name: "",
        number: "",
    };
    
    const handleSubmit = (values, actions) => {
        values = {...values,
            id: Date.now(),
        }
        addContact(values)
        actions.resetForm();
    };

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}>

            <Form action="" className={css.formContainer} >

                <div>
                    <label htmlFor="name" className={css.label}>Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component="span" className={css.formSpan} />
                </div>

                <div>
                    <label htmlFor="phone" className={`${css.label} ${css.labelPhone}`}>Number</label>
                    <Field type="tel" name="number" id="phone"/>
                    <ErrorMessage name="number" component="span" className={css.formSpan} />
                </div>

                <button type="submit" className={css.btn}>Add contact</button>
                
            </Form>
        </Formik>
    )
}