import { Role } from "../entities/Role";

const INITIAL_ROLES = [
  "admin",
  "agent",
  "user"
]

export const seedRoles = async () => {

  const rolesPromises = INITIAL_ROLES.map(role => Role.insert({ role }));

  await Promise.all(rolesPromises);

  console.log(`Roles created: ${INITIAL_ROLES.join(", ")}`)
};