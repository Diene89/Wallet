import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userState } = this.props;
    const moeda = 0;
    return (
      <div>
        <h3 data-testid="email-field">
          Usuário:
          {userState}
        </h3>
        <h3 data-testid="total-field">
          {moeda}
        </h3>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
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
