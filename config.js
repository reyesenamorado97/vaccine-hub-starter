require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "robertreyes";
  const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "robertreyes";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || "5432";
  const dbName = process.env.DATABASE_NAME || "vaccine_hub";

  // if the DATABASE_URL environment variable, use it
  // else, create the db connection string
  return (process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`);
}

 console.log("Vaccine Registration Config".green);
 console.log("PORT:".blue, PORT);
 console.log("Database URI:".blue, getDatabaseUri());
 console.log("---");

module.exports = {
  PORT,
  getDatabaseUri,
};