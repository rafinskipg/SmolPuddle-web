import React from 'react'

import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { CreateOrderModal } from './components/modal/CreateOrderModal'
import { ItemOrCollection } from './components/ItemOrCollection'
import { Listings } from './components/Listings'
import { Address } from './components/Address'
import { NotificationsModal } from './components/modal/NotificationsModal'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f92e1'
    }
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CreateOrderModal />
        <NotificationsModal />
        <HashRouter>
          <Header />
            <Switch>
              <Route
                path="/address/:address"
                strict={true}
              >
                <Address />
              </Route>
              <Route
                path={["/:collection/:id", "/:collection"]}
                strict={true}
              >
                <ItemOrCollection />
              </Route>
              <Route
                path="/"
                strict={true}
              >
                <Listings />
              </Route>
          </Switch>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App
