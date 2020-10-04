import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDarkMode, useStateValue } from './customs/contexts/state.context';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from './firebase';

// STATICS
import './Header.css';

function Header() {
  // States
  const [anchorEl, setAnchorEl] = React.useState(null);

  // HOOKS && CONTEXTS
  const [{ user }] = useStateValue();
  const [{ isDarkMode }, dispatch] = useDarkMode();

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={isDarkMode ? 'header__darkMode' : 'header'}>
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div
          className={`${
            isDarkMode ? 'header__option--darkMode' : 'header__option'
          }  header__option--active`}
        >
          <HomeIcon fontSize="large" />
        </div>
        <div
          className={isDarkMode ? 'header__option--darkMode' : 'header__option'}
        >
          <FlagIcon fontSize="large" />
        </div>
        <div
          className={isDarkMode ? 'header__option--darkMode' : 'header__option'}
        >
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div
          className={isDarkMode ? 'header__option--darkMode' : 'header__option'}
        >
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div
          className={isDarkMode ? 'header__option--darkMode' : 'header__option'}
        >
          <SupervisedUserCircleOutlinedIcon fontSize="large" />
        </div>
      </div>

      <div className={isDarkMode ? 'header__right--darkMode' : 'header__right'}>
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddOutlinedIcon />
        </IconButton>
        <IconButton>
          <ForumRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton onClick={handleClick}>
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              dispatch({
                type: 'SET_MODE',
                mode: !isDarkMode,
              });
              handleClose();
            }}
          >
            Dark Mode
          </MenuItem>
          <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
