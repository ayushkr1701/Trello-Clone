import React, { useState, useContext } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import dataAPI from './dataAPI';


export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(dataAPI);
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: 'NewListCard_InputBox',
            }}
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className='ListCard_TitleWrapper'>
          <Typography
            onClick={() => setOpen(!open)}
            className='ListCard_Title'
          >
            {title}
          </Typography>
          <span className='ListCard_Title'>
            <MoreHorizIcon className='morehorizon'/>
          </span>
        </div>
      )}
    </div>
  );
}
