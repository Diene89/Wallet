import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userState } = this.props;
    const moeda = 0;
    return (
      <div>
        <p data-testid="email-field">
          {`Usuário: ${userState}`}
        </p>
        <p data-testid="total-field">
          {`Despesa Total: R$ ${moeda}`}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.user.email,
});

Header.propTypes = {
  userState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
