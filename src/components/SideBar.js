import React from 'react';
import './Styles.css';
import { KeyboardArrowRightOutlined } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div>
        <nav className='Sidebar_SidebarWrapper'>
            <button className='Button_ButtonWrapper Button_White'>
                <img className='Button_Icon' src='https://trello-replica.web.app/static/media/user-blue.022f390c.png' />

            </button>
            <button className='Button_ButtonWrapper Button_Transparent'>
                <div className='Button_Icon'>
                    <KeyboardArrowRightOutlined/>
                </div>

            </button>

        </nav>
    </div>
  )
}

export default Sidebar