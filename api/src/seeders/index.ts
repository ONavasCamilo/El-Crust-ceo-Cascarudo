import { seedCategories } from "./CategorySeeder";
import { seedRoles } from "./RoleSeeder";

export default async function initSeeders() {
  const seeders = [...seedRoles(), ...seedCategories()];
  
  await Promise.all(seeders);
}