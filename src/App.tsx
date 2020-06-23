import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import { AboutMe } from './routes/AboutMe';
import Art from './routes/Art';
import Projects from './routes/Projects';
import ContactMe from './routes/ContactMe';
import UnknownLink from './components/UnknownLink';

import { Themes } from './store/system/types';
import { toogleTheme } from './store/system/actions';
import { connect } from 'react-redux';
import { RootState } from './store';

interface IProps {
  theme: Themes,
  toogleTheme: Function
}

interface IState {
  animate: boolean;
}

export enum ThemeModes {
  dark = '-dark',
  light = '-light'
}

export enum myUrls {
  aboutMe = 'about-me',
  art = 'art',
  projects = 'projects',
  contactMe = 'contact-me'
}

class App extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    animate: false
  }

  toogleThemeMode = () => {
    const themeMode = this.props.theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    this.props.toogleTheme(themeMode);

    this.setState({
      animate: true
    })
  }

  render () {
    const mode = this.props.theme === Themes.DARK ? ThemeModes.dark : ThemeModes.light;
    const isDarkMode = this.props.theme === Themes.DARK;
    const theme = `theme${mode}`;
    const animateBg = this.state.animate ? `animate${mode}` : '';

    return (
      <div className={`${theme} ${animateBg} App`}>
        <Header darkMode={isDarkMode} toogleThemeMode={this.toogleThemeMode} />

        <div className="App-content">
          <div className="App-min-content">
            <Switch>
              <Route path="/" exact component={AboutMe} />
              <Route path={`/${myUrls.aboutMe}`} component={AboutMe} />
              <Route path={`/${myUrls.art}`} component={Art} />
              <Route path={`/${myUrls.projects}`} component={Projects} darkMode={isDarkMode} />
              <Route path={`/${myUrls.contactMe}`} component={ContactMe} />

              <Route component={UnknownLink} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  theme: state.system.theme
});

// !!! DID not work
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     toogleTheme: () => dispatch({ type: TOOGLE_THEME })
//   }
// }

const mapDispatchToProps = {
  toogleTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(App)