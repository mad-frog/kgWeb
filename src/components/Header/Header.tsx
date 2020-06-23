import React from "react";
import './header.scss';
import DialogMenu from '../../components/DialogMenu';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from '../../components/IconButton';
import { ThemeModes, myUrls } from '../../App';
import { Link } from 'react-router-dom';

interface IState {
  menuOpen: boolean,
  animate: boolean;
}

interface IProps {
  darkMode: boolean,
  toogleThemeMode: Function
}

export default class Header extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    menuOpen: false,
    animate: false
  }

  handleToogleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleToogleThemeColor = () => {
    this.setState({
      animate: true
    })
    this.props.toogleThemeMode()
  }

  menuItems (isMobile: boolean) {
    const menuClass = isMobile ? 'mobile' : 'desktop';

    return <div className={`menu-item-container-${menuClass}`}>
      <Link to={`/${myUrls.aboutMe}`}><div>About me</div></Link>
      <Link to={`/${myUrls.art}`}><div>Art</div></Link>
      <Link to={`/${myUrls.projects}`}><div>Projects</div></Link>
      <Link to={`/${myUrls.contactMe}`}><div>Contact me</div></Link>
    </div>
  }

  render () {
    const themeMode = this.props.darkMode ? ThemeModes.dark : ThemeModes.light;
    const animateBg = this.state.animate ? `header-animate${themeMode}` : '';

    return <>
      <header className={`header ${animateBg}`}>
        <div className="header-left">
          <a href="/about-me">Kitija Glover</a>
        </div>
        
        <div className="header-right">
          {this.menuItems(false)}
          <IconButton
            icon={<Brightness4Icon />}
            label=""
            onClick={this.handleToogleThemeColor}
          />
          <IconButton
            class="open-menu-btn"
            icon={<MenuIcon />}
            label=""
            onClick={this.handleToogleMenu}
          />
        </div>
      </header>

      {/* opened dialog menu*/}
      <DialogMenu visible={this.state.menuOpen} animate={this.state.animate} toogleMenu={this.handleToogleMenu} themeMode={themeMode}>
        {this.menuItems(true)}
        <div className="menu-item-container-mobile">
          <IconButton
            icon={<Brightness4Icon />}
            label={this.props.darkMode ? "Light Mode" : "Dark mode"}
            onClick={this.handleToogleThemeColor}
          />
        </div>
      </DialogMenu>
    </>
  }
}