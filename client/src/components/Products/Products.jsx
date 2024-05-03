import useProducts from "../../hooks/useProducts"

const Products = () => {
  const { data, isFetching, refetch } = useProducts();

  return (
    <div>
      {isFetching && <p>Cargando.. owo</p>}
      {!isFetching && (
        data.map(product => {
          return <p>{product.name}</p>
        })
      )}
      <button onClick={refetch}>Reload</button>
    </div>
  )
}

export default Products