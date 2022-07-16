import React from 'react';
import './Styles.css';
import { KeyboardArrowDown } from '@material-ui/icons';

const Header = () => {
  return (
    <div>
        <header className='Topbar_MainContainer'>
            <div className='Topbar_LeftMenu'>
                <button className='Button_ButtonWrapper'>
                <img className='Button_Icon' src='https://trello-replica.web.app/static/media/apps_white.2aa687f0.svg' />

                </button>
                <div className='Topbar_MenuItem'>
                    <p className='Topbar_Logo'></p>

                </div>
                <div className='Topbar_MenuItem'>
                    <span >Workspaces</span>
                    <KeyboardArrowDown/>

                </div>
                <div className='Topbar_MenuItem'>
                    <span >Recent</span>
                    <KeyboardArrowDown/>

                </div>
                <div className='Topbar_MenuItem'>
                    <span>Starred</span>
                    <KeyboardArrowDown/>

                </div>
                <div className='Topbar_MenuItem'>
                    <span>Templates</span>
                    <KeyboardArrowDown/>

                </div>
                <button className='Button_ButtonWrapper Button_DarkButton'>
                    <span className='Button_Label'>Create</span>

                </button>

            </div>
            <div className='Topbar_RightMenu'>
                <div className='Topbar_SearchWrapper'>
                    <input  className='Topbar_SearchInput' type='search' placeholder='Search'/>


                </div>
                <button className='Button_ButtonWrapper'>
                    <img className='Button_Icon' src='https://trello-replica.web.app/static/media/info.23e92631.png'/>


                </button>
                <button className='Button_ButtonWrapper'>
                    <img className='Button_Icon' src='https://trello-replica.web.app/static/media/notification.c7957132.png'/>
                </button>
                <span className='UserAvatar'>QK</span>

            </div>


        </header>
    </div>
  )
}

export default Header