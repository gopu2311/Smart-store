const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql",          // Service name from docker-compose
  user: "root",
  password: "YES",
  database: "billing",
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Failed to connect to MySQL:", err.message);
    process.exit(1); // Exit process on failure
  } else {
    console.log("✅ Connected to MySQL");
  }
});

module.exports = connection;
 