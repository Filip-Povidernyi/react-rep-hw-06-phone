import React from "react";
import Button from "components/Button/Button";
import css from "../App/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlice";


const ContactsList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const capitalize = (contact) => {
    let newName = contact.split(' ').map(word => (
      word[0].toUpperCase() + word.slice(1)
    )
    ).join(' ');
    return newName
  }
  
  const handlerClick = (evt) => {
    dispatch(deleteContact(evt.target.name));
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {capitalize(contact.name)}: {contact.number}
          <Button type="button" name={contact.name} click={handlerClick} className={css.delBtn}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};


export default ContactsList;