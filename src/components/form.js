import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FormErrors } from './FormErrors';
import './form.css';


class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: {username: '', password: ''},
       usernameValid: false,
       passwordValid: false,
       formValid: false,
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    window.localStorage.setItem('user',name)
    window.localStorage.setItem('password',value)

    this.setState({[name]: value},
                  () => { this.validateField(name, value) });

  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.match("Admin");
        fieldValidationErrors.username = usernameValid ? '' : ' не верный';
        break;
      case 'password':
        passwordValid = value.match("12345678");
        fieldValidationErrors.password = passwordValid ? '': ' не верный';
        break;
      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid });

  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onclick () {
       this.setState({formValid: window.location.assign('http://localhost:3000/user/')}) ;


      }


  render () {
    return (
      <form className="demoForm">
       <div className="form">
        <h1 >Авторизация</h1>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
          <label htmlFor="username">Логин</label>
          <input type="username" required className="form-control" name="username"
            value={this.state.username}
            onChange={this.handleUserInput}  />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Пароль</label>
          <input type="password" className="form-control" name="password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>

        <button type="submit"
          disabled={!this.state.formValid}  onClick={(e) => this.onclick(e)} >Войти</button>
         </div>
      </form>
    )
  }
}

export default Form;
