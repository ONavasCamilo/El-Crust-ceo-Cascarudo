import app from "./app";
import { AppDataSource } from "./config/data-source";
import { PORT, RESTART_SCHEMA } from "./config/envs";
import { seedRoles } from "./seeders/RoleSeeder";

AppDataSource.initialize().then(() => {
  console.log("Logged to database");
  app.listen(PORT, () => {
    console.log(`Server running, http://localhost:${PORT}`);

    if (RESTART_SCHEMA) {
      seedRoles();
    }
  });
}).catch(err => console.log(err));