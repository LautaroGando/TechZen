import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";
import pool from "./config/db";

const initialize = async () => {
  console.log("Initializing server");
  const dbTestResult = await pool.query("SELECT NOW()");
  console.log("PostgreSQL connected:", dbTestResult.rows[0].now);
  await AppDataSource.initialize();
  console.log("Database initialized");
  await preLoadCategories();
  await preLoadProducts();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

initialize();
