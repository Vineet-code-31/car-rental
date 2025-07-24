import {
  addCarsService,
  deleteCarService,
  getAllCarsService,
  getCarByIdService,
  updateCarService,
} from "../models/cars-modal.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const addCars = async (req) => {
  const { make, model, year, color, price } = req;
  try {
    const newCar = await addCarsService(make, model, year, color, price);
    return newCar;
  } catch (error) {
    return error;
  }
};

export const getAllCars = async (req, res, next) => {
  try {
    const cars = await getAllCarsService();
    return cars;
  } catch (error) {
    return error;
  }
};

export const getCarById = async (req) => {
  try {
    const car = await getCarByIdService(req.id);
    if (!car) throw new Error("Car not found");
    return car;
  } catch (error) {
    return error;
  }
};

export const updateCar = async (req) => {
  try {
    const { id, make, model, year, color, price } = req;
    const car = await updateCarService(id, make, model, year, color, price);
    if (!car) throw new Error("Car not found");
    return car;
  } catch (error) {
    return error;
  }
};

export const deleteCar = async (req, res, next) => {
  try {
    const car = await deleteCarService(req.params.id);
    if (!car) throw new Error("Car not found");
    return car;
  } catch (error) {
    return error;
  }
};
