import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomePage from './pages/WelcomePage/WelcomePage';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import PokemonsPage from './pages/PokemonsPage/PokemonsPage';
import Counter from './shared/components/Counter/Counter';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import LanguageContext from './shared/contexts/LanguageContext/LanguageContext';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const App = () => {
  const [value, setValue] = useState(10);
  const [language, setLanguage] = useState('en');
  const [token, setToken] = useState(localStorage.getItem('TOKEN'));
  const [userId, setUserId] = useState(localStorage.getItem('USERID'));
  
  useEffect(()=>{
    if(token) {
      localStorage.setItem('TOKEN', token);
    } else {
      localStorage.removeItem('TOKEN');
    }
    if(userId) {
      localStorage.setItem('USERID', userId);
    } else {
      localStorage.removeItem('USERID');
    }
  }, [token, userId])
  
  console.log('render with language = ', language);
  return (
    <LanguageContext.Provider value={ language }>
      <Router>
        <div className="container app-container">
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  className="my-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pokemon"
                  className="my-link"
                >
                  Pokemon
                </Link>
              </li>
              <li>
                <Link
                  to="/pokemon-list"
                  className="my-link"
                >
                  Pokemon list
                </Link>
              </li>
              <li>
                <Link
                  to="/counter"
                  className="my-link"
                >
                  Counter
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="my-link"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="my-link"
                >
                  Login
                </Link>
              </li>
              <li>
                <select value={ language } onChange={ evt => setLanguage(evt.target.value) }>
                  <option value="en">English</option>
                  <option value="vi">Tiếng Việt</option>
                </select>
              </li>
            </ul>
          </nav>
          
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */ }
          <Switch>
            <Route
              path="/"
              exact
            >
              <WelcomePage/>
            </Route>
            <Route
              path="/pokemon"
              exact
            >
              <PokemonPage/>
            </Route>
            <Route
              path="/pokemon-list"
              exact={ true }
            >
              <PokemonsPage/>
            </Route>
            <Route
              path="/counter"
              exact
            >
              <Counter
                value={ value }
                setValue={ setValue }
              />
            </Route>
            <Route
              path="/login"
              exact
            >
              <LoginPage
                setToken={ setToken }
                setUserId={ setUserId }
              />
            </Route>
            <Route
              path="/profile"
              exact
              render={ () => {
                if(!userId) {
                  return (
                  <LoginPage
                    setToken={ setToken }
                    setUserId={ setUserId }
                  />)
                }
                return <ProfilePage/>
              }}
            />
          </Switch>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;



