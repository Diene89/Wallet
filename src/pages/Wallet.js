import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { thunkCoin } from '../actions';
import ExpenseForm from '../components/ExpenseForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { curriencieDispatch } = this.props;
    curriencieDispatch();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  curriencieDispatch: (currencies) => dispatch(thunkCoin(currencies)),
});

Wallet.propTypes = {
  curriencieDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
