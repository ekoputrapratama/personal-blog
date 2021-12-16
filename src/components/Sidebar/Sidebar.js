import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import './Sidebar.scss';

import MyImg from '../../images/me.jpg';

library.add(faGithub);
library.add(faTwitter);
library.add(faFacebook);

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="circular-img">
        <img src={MyImg} />
      </div>
      <span className="name">Muhammad Sayuti</span>
      <p>I'am a self taught developer live in Balikpapan Indonesia.</p>
      <div className="social-links">
        <a href="#">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
      </div>

      <div className="page-links">{props.children}</div>
    </div>
  );
}

export default Sidebar;
