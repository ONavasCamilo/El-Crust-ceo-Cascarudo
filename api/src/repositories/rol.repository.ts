import { AppDataSource } from "../config/data-source";
import { Role } from "../entities/Role";
import { User } from "../entities/User";

const RoleModel = AppDataSource.getRepository(Role).extend({
  async asignRole(user: User) {
    if (!user) throw new Error("Must send user");
    const role = await RoleModel.findOneBy({ role: "admin" });
    if (!role) throw new Error("Internal Error"); // -> when this happen that means we dont have the table "roles" with the default values.
    user.role = role;
    return user;
  }
});

export default RoleModel
