import dotenv from "dotenv";
import { db } from "../config/db.js";
import Services from "../models/Services.js";
import { services } from "./beautyServices.js";

dotenv.config();

await db();

async function seddDB() {
  try {
    await Services.insertMany(services);
    console.log("servicio guardado");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
 
}

async function clearDB() {
    try {
          await Services.deleteMany({});
  console.log("Base de datos limpiada");
  process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if (process.argv[2] === "--import") {
  seddDB();
}

if (process.argv[2] === "--destroy") {
  clearDB();
}
