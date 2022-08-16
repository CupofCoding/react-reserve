import express from "express";
import Hotel from "../models/Hotel.js";
// import { createHotel } from "../controllers/hotelcontroller.js";
// import { createError } from "../utilities/error.js";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelcontroller.js";
import {verifyAdmin} from "../utilities/verifyToken.js"

const router = express.Router();

//defined endpoints that export to middleware
//CREATE with "any parameter?querylimit" -> :id?limit=5
router.post("/", verifyAdmin, createHotel);

//UPDATE and include id as a parameter then pass it and update it using MongoDb set method; also include {new:true} to make sure data returned is current
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router