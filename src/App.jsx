import { useEffect, useState } from "react"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from "./components/ContactForm/ContactForm"

function App() {

  const allContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ] 

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contact");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }

    return allContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contacts))
  }, [contacts]) 


  



 const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts,newContact]
    })
  }

 const deleteContact = (idToDelete) => {
  setContacts((prevContacts) => {
    return prevContacts.filter((contact) => contact.id !== idToDelete)
  })
 }


 const [filter, setFilter] = useState("")

 const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) );

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact} />
  <SearchBox value={filter} onSearch={setFilter} />
  <ContactList contacts={visibleContacts} onDelete={deleteContact}/> 
  </div>

  )
}
 
export default App
