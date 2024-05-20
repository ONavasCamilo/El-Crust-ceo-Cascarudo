import useProducts from "../../hooks/useProducts"

const Products = () => {
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
    </div>
  )
}

export default Products