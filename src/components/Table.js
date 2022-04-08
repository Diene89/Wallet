import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expen) => {
            const value = Number(expen.value);
            const curr = (expen.exchangeRates[expen.currency].name).split('/');
            const exchange = Number(expen.exchangeRates[expen.currency].ask);
            const converted = exchange * value;
            console.log(typeof curr);
            return (
              <tr key={ expen.id }>
                <td>{expen.description}</td>
                <td>{expen.tag}</td>
                <td>{expen.method}</td>
                <td>{value.toFixed(2)}</td>
                <td>{curr[0]}</td>
                <td>{exchange.toFixed(2)}</td>
                <td>{converted.toFixed(2)}</td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>);
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Table);
