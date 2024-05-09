import { seedCategories } from "./CategorySeeder";
import { seedIngredients } from "./IngredientsSeeder";
import { seedProducts } from "./ProductSeeder";
import { seedRoles } from "./RoleSeeder";

export default async function initSeeders() {
  console.log("Started creating seeders");
  const initialSeeders = [...seedRoles(), ...seedCategories(), ...seedIngredients()];
  
  await Promise.all(initialSeeders);

  // Esto está después porque necesitams que se haya creado categories antes. Entonces, aprovechamos el promise.all para crear a la vez roles y categorias :)
  
  const products = await seedProducts(); // TODO: find a way to dont use await here. fk ts.
  await Promise.all(products);

  console.log("Finished seeders");
}