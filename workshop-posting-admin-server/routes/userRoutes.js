import express from 'express';
import UserController from '../controllers/UserController.js';
const router =express.Router();

//public routes

router.post("/subscribe/:_workshop_id",UserController.subscribe);
router.post("/ubsubscribe/:workshop_id",UserController.unsubscribe);
router.get("/getUserWorkshops",UserController.getWorkshop);


export default router;