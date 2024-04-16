import { seedCategories } from "./CategorySeeder";
import { seedProducts } from "./ProductSeeder";
import { seedRoles } from "./RoleSeeder";

export default async function initSeeders() {
  console.log("Started creating seeders");
  const initialSeeders = [...seedRoles(), ...seedCategories()];
  
  await Promise.all(initialSeeders);

  const products = await seedProducts(); // TODO: find a way to dont use await here. fk ts.
  await Promise.all(products);

  console.log("Finished seeders");
}