import useUsers from "../../hooks/useUsers";

export const UsersList = () => {
  const { data, isFetching, error } = useUsers();

  return (
    <div>
      {isFetching && <p>Cargando.. owo</p>}
      {!isFetching &&
        !error &&
        data.map((user) => {
          return <p key={user.username}>{user.username}</p>;
        })}
      {error && <p>Error</p>}
    </div>
  );
};
