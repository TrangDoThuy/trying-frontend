/**
 *
 * Header
 *
 */

import React, { useState } from 'react';

import { Collapse, Navbar, Nav, NavItem, Button } from 'reactstrap';

import StyledHeader from './StyledHeader';
import classes from './index.module.css';
import Link from '../Link';
import AuthContext from '../../context/auth-context';

import HuaLiangLogo from '../../assets/img/HuaLiang-Logo.png';
import FinMonsterLogo from '../../assets/img/FinMonster-Logo.png';

function Header() {
  const [isOpen, toggleIsOpen] = useState(false);

  const toggleCollapse = () => {
    if (window.innerWidth < 768) {
      toggleIsOpen(!isOpen);
    }
  };

  const mainPath = '/';
  const aboutUsPath = '/about-us';
  const contactUsPath = '/contact-us';
  const investmentPath = '/investment-form';
  const loginPath = '/login';
  const signUpPath = '/sign-up';

  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <StyledHeader>
            <Navbar expand="md">
              <div className="container">
                <div className="navbar-brand">
                  <Link url={mainPath}>
                    <div className={classes.logo}>
                      <img
                        id={classes.hua_liang_logo}
                        src={HuaLiangLogo}
                        alt="HuaLiang logo"
                      />
                      <img
                        id={classes.finmonster_logo}
                        src={FinMonsterLogo}
                        alt="FinMonster logo"
                      />
                      <div id={classes.nameCo_op}>Hua Liang x FinMonster</div>
                    </div>
                  </Link>
                </div>
                <Collapse isOpen={isOpen} navbar>
                  <Nav navbar>
                    {/* {links.map(link => {
                    return (
                      <NavItem key={link.to} onClick={toggleCollapse}>
                        <Link
                          url={link.to}
                          active={window.location.pathname === link.to}
                        >
                          <span title={link.name}>{link.name}</span>
                        </Link>
                      </NavItem>
                    );
                  })} */}
                    {context.token && (
                      <NavItem onClick={toggleCollapse}>
                        <Link
                          url={mainPath}
                          active={window.location.pathname === '/'}
                        >
                          <span title="projects">Projects</span>
                        </Link>
                      </NavItem>
                    )}

                    <NavItem onClick={toggleCollapse}>
                      <Link
                        url={aboutUsPath}
                        active={window.location.pathname === '/about-us'}
                      >
                        <span title="about_us">About Us</span>
                      </Link>
                    </NavItem>

                    <NavItem onClick={toggleCollapse}>
                      <Link
                        url={contactUsPath}
                        active={window.location.pathname === 'contact-us'}
                      >
                        <span title="contact_us">Contact Us</span>
                      </Link>
                    </NavItem>

                    {!context.token && (
                      <NavItem onClick={toggleCollapse}>
                        <Link
                          url={signUpPath}
                          active={window.location.pathname === '/sign-up'}
                        >
                          <span title="sign_up">Sign Up</span>
                        </Link>
                      </NavItem>
                    )}
                    {!context.token && (
                      <NavItem onClick={toggleCollapse}>
                        {' '}
                        <Link
                          url={loginPath}
                          active={window.location.pathname === '/login'}
                        >
                          <span title="login">Login</span>
                        </Link>
                      </NavItem>
                    )}
                  </Nav>

                  {context.token && (
                    <Button color="danger">
                      <Link url={investmentPath} className={classes.link}>
                        Add New Project
                      </Link>
                    </Button>
                  )}
                  {context.token && (
                    <button
                      className={classes.logoutButton}
                      onClick={context.logout}
                      type="button"
                    >
                      LOGOUT
                    </button>
                  )}
                </Collapse>
                {/* <NavbarToggler onClick={toggleCollapse}>
            <div className="nav-icon">
              <span />
              <span />
              <span />
              <span />
            </div>
          </NavbarToggler> */}
              </div>
            </Navbar>
          </StyledHeader>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Header;
