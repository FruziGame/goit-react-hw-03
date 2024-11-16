import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContactList({contacts, onDelete}) {
    return(
        <>
            <div className={css.contactWrapper}>
                {contacts.map(contact => (
                        <Contact 
                        onDelete={onDelete}
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        />
                ))}
            </div>
        </>
)}