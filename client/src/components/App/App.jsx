import Router from 'preact-router';
import Header from "../Header/Header"
import Products from "../Products/Products"
import Login from './../Forms/Login';

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Products path="/" />
        <Login path="/login" />
      </Router>
    </>
  )
}
