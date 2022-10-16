import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Filter = ({ value, onChange }) => (
  <TextField
    label="Find contacts"
    type="text"
    value={value}
    onChange={onChange}
  />
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
