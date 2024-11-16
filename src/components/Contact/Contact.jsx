import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import css from "./Contact.module.css"



export default function Contact({name,number,id,onDelete}) {
    return(
        <li className={css.contactItem}>
            
            <div>
                <div className={css.nameContainer}>
                    <FaUserLarge size="20"/>
                    <p>{name}</p>
                </div>
                
                <div className={css.phoneContainer}>
                    <FaPhoneAlt size="20"/>
                    <p>{number}</p>
                </div>
            </div>

            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>

        </li>
 
)}

