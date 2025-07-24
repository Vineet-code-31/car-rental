import pool from "../config/db.js";

async function createCarsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        make VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        year INT NOT NULL,
        color VARCHAR(255) NOT NULL,
        price INT NOT NULL
    )
  `;
  try {
    await pool.query(query);
    console.log("Cars table created successfully");
  } catch (error) {
    console.error("Error creating cars table", error);
  }
}

export default createCarsTable;
