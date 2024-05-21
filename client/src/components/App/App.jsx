import Router from 'preact-router';
import Header from "../Header/Header"
import Products from "../Products/Products"
import Login from './../Forms/Login';
import Register from '../Forms/Register';
import CreateProduct from '../Forms/CreateProduct';
import { UserProfile } from '../Profile/UserProfile';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'preact/hooks';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export const App = () => {
  const { user, getUserFromLocalstorage } = useAuth();

  useEffect(() => {
    if (!user) {
      getUserFromLocalstorage();
    }
  }, [user]);

  return (
    <>
      <Header />
      <Router>
        <Products path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <CreateProduct path="/create-product" />
        <ProtectedRoute path="/user-profile" component={UserProfile} />
      </Router>
    </>
  )
}
