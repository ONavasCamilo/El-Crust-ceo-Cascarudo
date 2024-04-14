import app from "./app";
import { AppDataSource } from "./config/data-source";
import { PORT, RESTART_SCHEMA } from "./config/envs";
import initSeeders from "./seeders";
import { seedRoles } from "./seeders/RoleSeeder";

AppDataSource.initialize().then(() => {
  console.log("Logged to database");
  app.listen(PORT, () => {
    console.log(`Server running, http://localhost:${PORT}`);

    if (RESTART_SCHEMA) {
      initSeeders();
    }
  });
}).catch(err => console.log(err));