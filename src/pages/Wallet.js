import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { thunkCoin } from '../actions';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  componentDidMount() {
    const { curriencieDispatch } = this.props;
    // console.log(this.props);
    curriencieDispatch();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
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
