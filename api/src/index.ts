import app from "./app";
import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";

AppDataSource.initialize().then(() => {
  console.log("Logged to database");
  app.listen(PORT, () => {
    console.log(`Server running, http://localhost:${PORT}`);
  });
}).catch(err => console.log(err));