import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useDarkMode, useStateValue } from './customs/contexts/state.context';

// STATICS
import './App.css';

function App() {
  // Contexts
  const [{ user }] = useStateValue();
  const [{ isDarkMode }] = useDarkMode();

  return (
    <div className={isDarkMode ? 'app__darkMode' : 'app'}>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
