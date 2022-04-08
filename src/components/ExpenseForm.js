import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkCoin, addExpense, API } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  handleButtonClick = async () => {
    console.log('click');
    const { expenseDispatch } = this.props;
    const { id, value, currency, method, tag, description } = this.state;
    // await curriencieDispatch();
    const request = await API();

    const expenses = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: request,
    };

    expenseDispatch(expenses);
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    const filterUSDT = currencies.filter((coin) => coin !== 'USDT');
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            placeholder="Adicione um valor"
            type="number"
            id="value-input"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select
            data-testid="currency-input"
            id="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { filterUSDT.map((item, index) => (
              <option key={ index } value={ item }>{item}</option>
            )) }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Método">Método de pagamento</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category-input">
          Categoria:
          <select
            data-testid="tag-input"
            id="category-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="description-input"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          value="Adicionar despesa"
          onClick={ this.handleButtonClick }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  curriencieDispatch: (currencies) => dispatch(thunkCoin(currencies)),
  expenseDispatch: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
