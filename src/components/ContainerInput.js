import React, { useState } from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import CardInput from './CardInput';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    marginTop: theme.spacing(1),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: '#0480c9',
    '&:hover': {
      backgroundColor: 'hsla(0,0%,100%,.3)',
    },
    cursor:'pointer',
    color:'white',
  },
  addList:{
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: '#0480c9',
    '&:hover': {
      backgroundColor: fade('#0480c9', 0.5),
    },
    cursor:'pointer',
    color:'white',
  }
}));

export default function ContainerInput({ listId, type }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <CardInput setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
        
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === 'card' ? '+ Add a Card' : '+ Add another List'}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
