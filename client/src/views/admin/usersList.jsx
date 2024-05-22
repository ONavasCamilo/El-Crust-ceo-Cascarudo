import useUsers from "../../hooks/useUsers";

export const UsersList = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) return <div>Loading resources owo</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
