import Router from 'preact-router';
import Header from "../Header/Header"
import Products from "../Products/Products"
import Login from './../Forms/Login';
import Register from '../Forms/Register';
import CreateProduct from '../Forms/CreateProduct';
import { UserProfile } from '../Profile/UserProfile';

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Products path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <CreateProduct path="/create-product" />
        <UserProfile path="/user-profile" />
      </Router>
    </>
  )
}
