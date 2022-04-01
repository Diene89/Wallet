import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const validadEmail = /\w+@\w+\.\S+/g;
      const passwordLength = 6;
      if (password.length >= passwordLength && validadEmail.test(email)) {
        this.setState({ isButtonDisabled: false });
      } else {
        this.setState({ isButtonDisabled: true });
      }
    });
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    const { history, userLogin } = this.props;
    const { email } = this.state;
    userLogin(email);
    history.push('/carteira');
  }

  render() {
    const { isButtonDisabled } = this.state;
    return (
      <form>
        <input
          type="text"
          name="email"
          placeholder="Digite o seu e-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <input
          type="button"
          disabled={ isButtonDisabled }
          onClick={ this.handleButtonClick }
          value="Entrar"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(login(email)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
