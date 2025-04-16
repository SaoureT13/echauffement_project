const { Pool } = require("pg");

// Configuration de la connexion à la base de données
const db = new Pool({
    host: "localhost",
    user: "teddy_admin",
    password: "password",
    database: "order_management_system_db",
    port: 5432, // Port par défaut de PostgreSQL
});

module.exports = db;