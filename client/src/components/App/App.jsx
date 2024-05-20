import Router from 'preact-router';
import Header from "../Header/Header"
import Products from "../Products/Products"
import Login from './../Forms/Login';
import Register from '../Forms/Register';

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Products path="/" />
        <Login path="/login" />
        <Register path="/register" />
      </Router>
    </>
  )
}
