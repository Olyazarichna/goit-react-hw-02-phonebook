import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
};
