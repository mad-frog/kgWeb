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

interface IState {
  isDarkMode: boolean;
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

export default class App extends React.Component<{}, IState> {
  public readonly state: Readonly<IState> = {
    isDarkMode: true,
    animate: false
  }

  componentDidMount () {
    console.log('APP - did mount')
  }

  toogleThemeMode = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
      animate: true
    })
  }

  render () {
    const mode = this.state.isDarkMode ? ThemeModes.dark : ThemeModes.light;
    const theme = `theme${mode}`;
    const animateBg = this.state.animate ? `animate${mode}` : '';
    
    return (
      <div className={`${theme} ${animateBg} App`}>
        <Header darkMode={this.state.isDarkMode} toogleThemeMode={this.toogleThemeMode} />

        <div className="App-content">
          <div className="App-min-content">
            <Switch>
              <Route path="/" exact component={AboutMe} />
              <Route path={`/${myUrls.aboutMe}`} component={AboutMe} />
              <Route path={`/${myUrls.art}`} component={Art} />
              <Route path={`/${myUrls.projects}`} component={Projects} darkMode={this.state.isDarkMode} />
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