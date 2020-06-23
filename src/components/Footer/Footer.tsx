import React from 'react';
import './footer.scss';

import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default class Footer extends React.Component {
  render () {
    // NOTE Have to check if it is mobile, then show whatsapp icon
    return <footer className="footer-center">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/kitija-glover-583a0349/" ><LinkedInIcon /></a>
        <a href="https://www.facebook.com/kitija.krumina"><FacebookIcon /></a>
        <a href="https://github.com/mad-frog"><GitHubIcon /></a>
        <a href="https://www.instagram.com/kitijakrumina/"><InstagramIcon /></a>

        {
          <a href="https://api.whatsapp.com/send?phone=13016425136">
            <WhatsAppIcon />
          </a>
        }
      </div>
      <div className="credits">© 2020 Kitija Glover</div>
    </footer>
  }
}