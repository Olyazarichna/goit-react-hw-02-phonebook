import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        defaultValue={value}
      />
    </label>
  );
};
export default Filter;

Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
