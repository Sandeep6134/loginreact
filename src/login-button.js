import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" size="large" spacing={2} aria-label="outlined primary button group">
      <Button>Admin Login</Button>
      <Button>Student Login</Button>
    </ButtonGroup>
  );
}
