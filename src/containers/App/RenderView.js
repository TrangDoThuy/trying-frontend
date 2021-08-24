import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import InvestmentForm from '../InvestmentForm';
import Login from '../Login';
import SignUp from '../SignUp';
import About from '../About';
import Contact from '../Contact';
import ProjectPage from '../ProjectPage';
import ProjectsPage from '../ProjectsPage';
import NotFound from '../NotFound';
// import UniversalPage from '../UniversalPage';
import AuthContext from '../../context/auth-context';

// const headerUrls = [
//   { name: 'Projects', to: `$'/'` },
//   { name: 'About Us', to: `$'/'about-us` },
//   // Uncomment when available
//   // { name: 'Investment Form', to: '/investment-form' },
// ];

const RenderView = ({ i18nlocales }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const investmentPath = `/investment-form`;
  const loginPath = `/login`;
  const signUpPath = `/sign-up`;
  const aboutUsPath = `/about-us`;
  const contactUsPath = `/contact-us`;
  // const UniversalPath = `/:slug`;
  const projectPath = `/:id/:content`;

  const login = (newToken, newUserId) => {
    setToken(newToken);
    setUserId(newUserId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };
  return (
    <div>
      <GlobalStyles />
      <AuthContext.Provider
        value={{
          token,
          userId,
          login,
          logout,
        }}
      >
        <Header />
        <Switch>
          {token && <Redirect from={loginPath} to="/" />}
          {token && <Redirect from={signUpPath} to="/" />}
          {token && (
            <Route
              path="/"
              render={props => (
                <ProjectsPage {...props} locales={i18nlocales} />
              )}
              exact
            />
          )}
          {token && (
            <Route path={investmentPath} component={InvestmentForm} exact />
          )}
          {!token && <Route path={loginPath} component={Login} exact />}
          {!token && <Route path={signUpPath} component={SignUp} exact />}
          <Route path={aboutUsPath} component={About} exact />
          <Route path={contactUsPath} component={Contact} exact />
          {/* <Route path={UniversalPath} component={UniversalPage} exact /> */}
          {token && <Route path={projectPath} component={ProjectPage} exact />}

          {!token && <Redirect to={aboutUsPath} exact />}
          <Route component={NotFound} />
        </Switch>
      </AuthContext.Provider>
      {/* <Footer /> */}
    </div>
  );
};

export default RenderView;
