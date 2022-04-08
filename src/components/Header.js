import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     total: '',
  //   };
  // }

  myTotal = () => {
    const { expenses } = this.props;
    if (expenses.length === 0) { return 0; }
    const vitu = expenses.reduce((acc, curr) => {
      const { value, exchangeRates, currency } = curr;
      acc += Number(value) * Number(exchangeRates[currency].ask);
      return acc;
    }, 0).toFixed(2);
    return vitu;
  }

  render() {
    const { userState } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          {`Usuário: ${userState}`}
        </p>
        <p data-testid="total-field">
          {`${this.myTotal()}`}
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
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userState: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
