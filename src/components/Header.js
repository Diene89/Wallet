import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      total: '',
    };
  }

  myTotal = () => {
    const { expenses } = this.props;
    const myExpense = expenses;
    if (myExpense.length === 0) { return 0; }
    myExpense.reduce((acc, curr) => {
      const { value, exchangeRates, currency } = curr;
      acc += Number(value) * exchangeRates[currency].ask;
      return this.setState({
        total: acc.toFixed(2),
      });
    });
  }

  render() {
    const { userState } = this.props;
    const { total } = this.state;
    return (
      <div>
        <p data-testid="email-field">
          {`Usuário: ${userState}`}
        </p>
        <p data-testid="total-field">
          {`Despesa Total: R$ ${total}`}
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
  expense: state.wallet.expenses,
});

Header.propTypes = {
  userState: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
