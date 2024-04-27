import { UserModel } from "../config/data-source";
import { hashPassword } from "../utils/passwordManager";
import { SECRET } from "../config/envs";
import RoleModel from "../repositories/rol.repository";
import { User } from "../entities/User";

export const getUsersService = async () => {
  const users = await UserModel.find();
  return users;
}

export const getUserService = async ({ id, username, email }: { id: number, username: string | undefined, email: string | undefined }) => {
  console.log({ username, email })
  if (id) {
    return await UserModel.findBy({ id })
  }
  else if (username) {
    console.log("entro aca")
    return await UserModel.findBy({ username })
  }
  else if (email) {
    console.log("entro aca")
    return await UserModel.findBy({ email })
  }
}

export const registerUserService = async ({ username, password, email }: { username: string, password: string, email: string }) => {

  const passwordHash = await hashPassword(password);
  const newUser = UserModel.create({ username, password: passwordHash, email })
  await RoleModel.asignRole(newUser)
  await newUser.save()

  //   const newUser = new User()
  //   newUser.username = username;
  //   newUser.password = await hashPassword(password);
  //   newUser.email = email;

  //   await newUser.save();  
  return newUser
}

export const loginUserService = async ({ username, email }: { username: string | undefined, email: string | undefined }) => {
  return username
    ? await UserModel.findOne({ where: { username }, relations: ["role"] })
    : await UserModel.findOne({ where: { email }, relations: ["role"] });
}