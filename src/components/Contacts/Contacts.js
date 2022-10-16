import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Contacts({ contacts, onClick }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Tooltip title="Delete">
            <IconButton onClick={() => onClick(id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};

export default Contacts;
