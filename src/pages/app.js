import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import IndexPage from "./indexPage"
import NotFoundPage from "./404"
import Login from "../views/member/login"
import Profile from "../views/member/profile"
import PrivateRoute from "../components/privateRoute"
import { Provider } from 'react-redux';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Layout>
      <Router>
        <IndexPage path="/" />
        <Login path="/member/login" />
        <PrivateRoute path="/member/profile" component={Profile} />
        <NotFoundPage path="*" />
      </Router>
    </Layout>
  </Provider>
)


export default App
