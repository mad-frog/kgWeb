import React from 'react';
import './contactMe.scss';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';

import { Themes } from '../../store/system/types';
import { connect } from 'react-redux';
import { RootState } from '../../store';

var nodemailer = require('nodemailer');

interface StateProps {
  theme: Themes
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  details: '',
  fieldValidationErrors: {
    name: '',
    email: '',
    phone: '',
    details: ''
  }
}

type State = Readonly<typeof initialState>


class ContactMe extends React.Component<StateProps> {
  readonly state: State = initialState;
  private timer: any;

  validateEmail (value: string) : boolean {
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return emailValid ? true : false;
  }

  countDownToShowEmailError = () => {
    const fieldValidationErrors = this.state.fieldValidationErrors;
    fieldValidationErrors.email = this.validateEmail(this.state.email) ? '' : 'Email is invalid';
    
    clearInterval(this.timer!);
    this.timer = 0;

    this.setState({
      fieldValidationErrors
    });

  }

  countDownToShowPhoneError = () => {
    const fieldValidationErrors = this.state.fieldValidationErrors;

    if (this.state.phone.length > 11) {
      fieldValidationErrors.phone = 'Little too many symbols for phone number';
    } else if (this.state.phone.length < 10) {
      fieldValidationErrors.phone = 'Not enough symbols for phone number';
    }

    clearInterval(this.timer!);
    this.timer = 0;

    this.setState({
      fieldValidationErrors
    });
  }

  handleNameChange = (e: any) => {
    e.persist();

    const fieldValidationErrors = this.state.fieldValidationErrors;
    fieldValidationErrors.details = '';

    if (e.target.value.length < 31) {
      this.setState({
        name: e.target.value
      });
    } else {
      fieldValidationErrors.name = "Only 30 symbols allowed";
      this.setState({
        fieldValidationErrors
      });
    }
  }

  handleEmailChange = (e: any) => {
    e.persist();

    clearInterval(this.timer!);
    this.timer = 0;

    this.timer = setTimeout(() => {
      this.countDownToShowEmailError();
    }, 3000);

    this.setState({
      email: e.target.value
    });
  }

  handlePhoneChange = (e: any) => {
    e.persist();

    const regEx = /^[0-9\b]+$/;
    const phoneValid = regEx.test(e.target.value);

    const fieldValidationErrors = this.state.fieldValidationErrors;
    fieldValidationErrors.phone = '';
    
    if (!phoneValid) {
      fieldValidationErrors.phone = 'Please enter only numbers';
    } else if (e.target.value === "") {
      fieldValidationErrors.phone = 'Phone number is required';
    }

    clearInterval(this.timer!);
    this.timer = 0;

    this.timer = setTimeout(() => {
      this.countDownToShowPhoneError();
    }, 3000);

    if (fieldValidationErrors.phone !== '' && e.target.value !== '') {
      this.setState({
        fieldValidationErrors
      });
    } else {
      this.setState({
        phone: e.target.value,
        fieldValidationErrors
      });
    }
  }

  handleDetailsChange = (e: any) => {
    e.persist();

    const fieldValidationErrors = this.state.fieldValidationErrors;
    fieldValidationErrors.details = '';

    if (e.target.value.length < 988) {
      this.setState({
        details: e.target.value
      });
    } else {
      fieldValidationErrors.details = "Only 1000 symbols allowed";
      this.setState({
        fieldValidationErrors
      });
    }
  }

  handleSendForm = () => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: 'kitijakrumina24@gmail.com',
          pass: 'Droshaparole666'
      }
    });
    
    var mailOptions = {
      from: 'kitijakrumina24@gmail.com',
      to: 'kitijaglover@gmail.com',
      subject: 'WORK',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error: any, info: any){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  render () {
    const themeDark = createMuiTheme({
      palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
        primary: {
          main: '#fb8716'
        },
        secondary: {
          main: '#1d1a19'
        },
      },
    });

    const themeLight = createMuiTheme({
      palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
        primary: {
          main: '#fb8716'
        },
        secondary: {
          main: '#1d1a19'
        },
      },
    });

    const theme = this.props.theme === Themes.DARK ? themeDark : themeLight;

    return <div className="contactsContainer">
      <div className="contactsBlock">
        <form noValidate autoComplete="off">
        <ThemeProvider theme={theme}>
          <div className="contactsInput">
            <TextField
              id="outlined-name"
              label="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
              error={this.state.fieldValidationErrors.name !== ''}
              helperText={this.state.fieldValidationErrors.name}
              fullWidth
            />
          </div>
          <div className="contactsInput">
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              value={this.state.email}
              autoComplete="email"
              onChange={this.handleEmailChange}
              error={this.state.fieldValidationErrors.email !== ''}
              helperText={this.state.fieldValidationErrors.email}
              required
              fullWidth
            />
          </div>
          <div className="contactsInput">
            <TextField
              id="outlined-email-input"
              label="Phone number"
              type="phone"
              name="phone"
              value={this.state.phone}
              autoComplete="phone"
              error={this.state.fieldValidationErrors.phone !== ''}
              helperText={this.state.fieldValidationErrors.phone}
              onChange={this.handlePhoneChange}
              required
              fullWidth
            />
          </div>
          <div className="contactsInput">
            <TextField
              id="outlined-multiline-static"
              label="How can I help you?"
              multiline
              placeholder="I was wondering about:"
              value={this.state.details}
              onChange={this.handleDetailsChange}
              error={this.state.fieldValidationErrors.details !== ''}
              helperText={this.state.fieldValidationErrors.details}
              required
              fullWidth
            />
          </div>
          <div className={'sendButton'}>
            <Button
              endIcon={<Send />}
              disableElevation
              onClick={this.handleSendForm}
            >
              SEND
            </Button>
          </div>
        </ThemeProvider>
        </form>
      </div>
    </div>
  }
}

const mapState = (state: RootState) => ({
  theme: state.system.theme
})

const connector = connect(mapState)
export default connector(ContactMe)