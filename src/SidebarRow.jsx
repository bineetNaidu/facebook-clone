import React from 'react';
import { Avatar } from '@material-ui/core';
import { useDarkMode } from './customs/contexts/state.context';

// STATICS
import './SidebarRow.css';

const SidebarRow = ({ title, src, Icon }) => {
  // Contexts
  const [{ isDarkMode }] = useDarkMode();
  return (
    <div className={isDarkMode ? 'sidebarRow__darkMode' : 'sidebarRow'}>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
