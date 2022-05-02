import React, {Component} from 'react';

export default class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => { 
    this.setState(
      {
        [event.target.name]:event.target.value,
      }
    )
  }

  handleSubmit  = (event) => {
    event.preventDefault();
    const {email} = this.state;
    alert(`O login foi realizado usando o email ${email}`);
  }

  render(){
    const { email, password } = this.state;
    return(
      <section className="login-form">
      <h1>Login</h1>
      <form onSubmit={ this.handleSubmit }>
        {/* Não sabia fazer comentário nessa merda */}
        <label htmlFor="email">
          Email:
          <input 
          value ={email}
          type='email' 
          name='email' 
          id='email'
          onChange = {this.handleChange}
          />
        </label>

        <label htmlFor="password">
          Email:
          <input 
          value ={password}
          type='password' 
          name='password' 
          id='password'
          onChange = {this.handleChange}
          />
        </label>

        <button type='usbmit'> Logar </button>
      </form>
    </section>
    );
  }
}