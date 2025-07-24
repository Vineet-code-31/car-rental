// import express from "express";
import {
  addCars,
  deleteCar,
  getAllCars,
  getCarById,
  updateCar,
} from "../controllers/cars-controller.js";

// const router = express.Router();

// router.post("/car", addCars);
// router.get("/car", getAllCars);
// router.get("/car/:id", getCarById);
// router.put("/car/:id", updateCar);
// router.delete("/car/:id", deleteCar);

// export default router;

export const typeDefs = `
  type car {
    id: ID!
    make: String!
    model: String!
    year: Int!
    color: String!
    price: Int!
  }

  type Query {
    getAllCars: [car!]!
    getCarById(id: ID!): car
  }

  type Mutation {
    addCar(make: String!, model: String!, year: Int!, color: String!, price: Int!): car

    updateCar(id: ID!, make: String!, model: String!, year: Int!, color: String!, price: Int! ): car

    deleteCar(id: ID!): car
  }
`;

export const resolvers = {
  Query: {
    // getAllCars: () => [{ make: "TATA", year: 1992 }],
    getAllCars: async () => await getAllCars(),
    getCarById: async (_, params) => await getCarById(params),
  },
  Mutation: {
    addCar: async (_, params) => await addCars(params),
    updateCar: async (_, params) => await updateCar(params),
    deleteCar: async (_, params) => await deleteCar(params),
  },
};
