/**
 *
 * Footer
 *
 */

import React from 'react';
import StyledFooter from './StyledFooter';
import classes from './index.module.css';

import WhatsappLink from '../../assets/img/whatsapp--v1.png';

function Footer() {
  // const [email, setValue] = useState('');

  return (
    <StyledFooter>
      {/* <div className="container">
        <div className="navbar-brand">
          <div className={classes.logoBox}>
            <img
              id={classes.finmonster_logo}
              src={FinMonsterLogoFooter}
              alt="FinMonster logo"
            />
            <div id={classes.nameCo_op}>© 2021 powered by FinMonster</div>
          </div>
        </div>
      </div> */}
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=85297300731"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id={classes.whatsapp_logo}
            src={WhatsappLink}
            alt="Whatsapp link"
          />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
