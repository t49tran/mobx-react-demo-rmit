import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { UsersContainer } from './containers/UsersContainer';
import { createStore, StoreContext } from './stores';

function App() {
  const store = createStore();

  // We are using provider / consumer pattern
  // StoreContext is a React Context -> StoreContext = React.createContext({...})
  // Provider -> Consumer
  // React context / Redux / Mobx
  // StoreContext.Consumer
  // hook useContext -> useStore = () => useContext(StoreContext)
  return (
    <StoreContext.Provider value={store}>
      <CssBaseline />
      <UsersContainer />
    </StoreContext.Provider>
  );
}

export default App;
