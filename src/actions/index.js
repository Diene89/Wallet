export const LOGIN = 'LOGIN';
export const login = (email) => ({ type: LOGIN, email });
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });

export const REQUEST_API = 'REQUEST_API';
export const SUCCESS = 'SUCCESS';

export const request = () => ({ type: REQUEST_API });
// export const success = (coins) => ({ type: SUCCESS, coins });

export const success = (coins) => {
  const keys = Object.keys(coins).filter((coin) => coin !== 'USDT');
  return ({
    type: SUCCESS,
    currencies: keys,
  });
};

const getCurrencies = 'https://economia.awesomeapi.com.br/json/all';
export const API = () => (fetch(getCurrencies)
  .then((response) => (response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))));

export function thunkCoin() {
  return async (dispatch) => {
    dispatch(request());
    const coin = await API();
    dispatch(success(coin));
    return coin;
  };
}
