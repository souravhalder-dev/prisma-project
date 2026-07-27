import { Router } from "express";
import { userControler } from "./user.controler";




const router= Router();
router.post("/register", userControler.createdUser);

export const userRoutes =  router;