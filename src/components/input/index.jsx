import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
export const Input = ({ handleOpenContacts, search, ...props }) => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}>
      <InputBase sx={{ ml: 1, flex: 1 }} {...props} />
      {search && (
        <>
          <Button
            onClick={handleOpenContacts}
            sx={{ p: '5px' }}
            color="success"
            variant="contained">
            <SearchIcon />
            <ArrowDownIcon />
          </Button>
        </>
      )}
    </Paper>
  );
};
