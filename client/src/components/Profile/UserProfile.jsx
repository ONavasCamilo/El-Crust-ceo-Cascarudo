import { userStore } from "../../store/store";

export const UserProfile = () => {
  const user = userStore((state) => state);

  return (
    <div>
      <h1>profile</h1>
      {user.isLoggedIn && <p>El usuario con el id {user.id} está logeado. Su rol es: {user.role} </p>}
      {console.log(user)}
    </div>
  );
};
