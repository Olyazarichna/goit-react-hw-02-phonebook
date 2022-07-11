import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, number }) => {
  return (
    <li>
      {name}:{number}
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  //   id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
