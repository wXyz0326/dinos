import React, { createContext, useReducer } from 'react';
// ----------------------------------------------------------------------

const initialState = {
  walletConnected: false,
  walletAddress: ''
};

const handlers = {
  SET_WALLET_CONNECTED: (state, action) => {
    return {
      ...state,
      walletConnected: action.payload
    };
  },
  SET_WALLET_ADDRESS: (state, action) => {
    return {
      ...state,
      walletAddress: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  connectWallet: () => Promise.resolve(),
});

//  Provider
function WalletProvider({ children }) {
  const [state] = useReducer(reducer, initialState);

  const connectWallet = () => {

  };

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };
