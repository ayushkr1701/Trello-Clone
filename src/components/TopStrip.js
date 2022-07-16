import React from 'react';
import './Styles.css';

const TopStrip = () => {
  return (
    <div className='BoardPage_TopStrip'>
        <div>
            <img className='BoardPage_EarthIcon' src='https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg'/>
            <span className='BoardPage_Message'>This board is set to public. Board admins can change its visibility setting at any time.</span>
            <a className='BoardPage_KnowMore'>Learn more here</a>
        </div>
        <span clas>

            <img className='material-icons' src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png"/>
        </span>
    </div>
  )
}

export default TopStrip