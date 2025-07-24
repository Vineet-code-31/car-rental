import pool from "../config/db.js";

export const addCarsService = async (make, model, year, color, price) => {
  const result = await pool.query(
    "INSERT INTO cars (make, model, year, color, price) VALUES ($1, $2, $3, $4, $5 ) RETURNING *",
    [make, model, year, color, price]
  );

  return result.rows[0];
};
export const getAllCarsService = async () => {
  const result = await pool.query("SELECT * FROM cars");
  return result.rows;
};
export const getCarByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM cars where id= $1", [id]);
  return result.rows[0];
};
export const updateCarService = async (id, make, model, year, color, price) => {
  const result = await pool.query(
    "UPDATE cars SET make=$1, model=$2, year=$3, color=$4, price=$5 WHERE id=$6 RETURNING *",
    [make, model, year, color, price, id]
  );
  return result.rows[0];
};
export const deleteCarService = async (id) => {
  const result = await pool.query("DELETE FROM cars WHERE id=$1 RETURNING *", [
    id,
  ]);
  return result.rows[0];
};
