import express from "express";
import { login, register } from "../controllers/authcontroller.js";

const router = express.Router();

//defined endpoints that export to middleware
router.post("/register", register)
router.post("/login", login)

export default router