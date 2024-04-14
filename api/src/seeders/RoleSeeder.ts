import { InsertResult } from "typeorm";
import { Role } from "../entities/Role";

const INITIAL_ROLES = [
  "admin",
  "agent",
  "user"
]

export const seedRoles = (): Promise<InsertResult>[] => {
  const rolesPromises = INITIAL_ROLES.map(role => Role.insert({ role }));
  return rolesPromises;
};