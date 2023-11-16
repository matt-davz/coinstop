import { createSlice } from "@reduxjs/toolkit";
import { prettyDigits } from "prettydigits";

const obj = [{
    id: '1',
    name: "Test",
    balance: 100,
    change: 10,
    highlighted: true,
},
{   
    id: '2',
    name: "Test2",
    balance: 200,
    change: prettyDigits(-0.0034),
    highlighted: false,
},
{
    id: '3',
    name: "Test2",
    balance: 0,
    change: 0,
    highlighted: false,
}
]

const portfoliosSlice = createSlice({
  name: "portfolios",
  initialState: [],
  reducers: {
    createPortfolio: (state, action) => {
      state.push(action.payload);
    },
    removePortfolio: (state, action) => {
      return state.filter(portfolio => portfolio.id !== action.payload);
    },
    toggleHighlight: (state, action) => {
        const id  = action.payload;

        const index = state.findIndex(portfolio => portfolio.id === id);

        state.forEach((portfolio, i) => {
            if (i !== index) {
                portfolio.highlighted = false;
            } else {
                portfolio.highlighted = true;
            }
        });
    },
    buyTransaction: (state, action) => {
      const { portfolioId, transaction } = action.payload;
      const index = state.findIndex(portfolio => portfolio.id === portfolioId);
      if (index !== -1) {
        state[index].transactions.push(transaction);
      }
    },
    sellTransaction: (state, action) => {
      const { portfolioId, transactionId } = action.payload;
      const index = state.findIndex(portfolio => portfolio.id === portfolioId);
      if (index !== -1) {
        state[index].transactions = state[index].transactions.filter(transaction => transaction.id !== transactionId);
      }
    }
  }
});

export const { createPortfolio, removePortfolio, toggleHighlight, buyTransaction, sellTransaction } = portfoliosSlice.actions;

export const selectPortfolios = (state) => state.portfolio;

export default portfoliosSlice.reducer;

const portfolio = {
    id: 'xjbnaji',
    name: '',
    coins: [
        {
            coins: 'BTC',
            coinId: '21scx',
            amount: 1
        },
        {
            coins: 'BTC',
            coinId: '21scx',
            amount: 1
        },
    ],
    transactions: [
        {
            id: 'xXCDS',
            sell: true,
            coins: [
                {
                    coins: 'BTC',
                    coinId: 'zxcsd'
                }
            ]
        }
    ],
    dateCreated: '11/13/1970'
}