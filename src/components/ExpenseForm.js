import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpenseForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            placeholder="Adicione um valor"
            type="number"
            id="value-form"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select
            data-testid="currency-input"
            id="currency-input"
            name="currency-input"
          >
            { currencies.map((item, index) => (
              <option key={ index } value={ item }>{item}</option>
            )) }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method-input"
          >
            <option value="Método">Método de pagamento</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="description-input"
          />
        </label>
        <label htmlFor="category-input">
          Adicionar Despesa
          <select
            data-testid="tag-input"
            id="category-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies });

export default connect(mapStateToProps)(ExpenseForm);
