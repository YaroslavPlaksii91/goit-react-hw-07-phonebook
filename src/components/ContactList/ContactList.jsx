import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import ContactListElem from '../ContactListElem';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contacts}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.contactsItem}>
          <ContactListElem
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
