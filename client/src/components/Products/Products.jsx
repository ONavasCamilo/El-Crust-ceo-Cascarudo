import useProducts from "../../hooks/useProducts"
import { userStore } from "../../store/store";

const Products = () => {
  const { user } = userStore((state) => state);
  const { data, isFetching, refetch, error } = useProducts();

  return (
    <div>
      {isFetching && <p>Cargando.. owo</p>}
      {!isFetching && !error && (
        data.map(product => {
          return <p key={product.name}>{product.name}</p>
        })
      )}
      {error && <p>Error! o.o</p>}
      <button onClick={refetch}>Reload</button>
      {user.isLoggedIn && <p>El usuario con el id {user.id} está logeado. Su rol es: {user.role} </p>}
    </div>
  )
}

export default Products