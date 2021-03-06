/* eslint-disable no-unused-vars */
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import ListContainer from './containers/list'
import CharacterContainer from './containers/character'

import characterReducer from './redux/reducer'
import charactersSaga from './redux/saga'

const todoMiddleware = createSagaMiddleWare()
const store = createStore(characterReducer, applyMiddleware(todoMiddleware))
todoMiddleware.run(charactersSaga)

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/characters" component={ListContainer} />
          <Route exact path="/characters/:id" component={CharacterContainer} />
          <Redirect to="/characters" />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
