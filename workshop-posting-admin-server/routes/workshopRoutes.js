import express from 'express';
import WorkshopController from '../controllers/WorkshopController.js';
const router =express.Router();

//public routes

router.post("/register",WorkshopController.workshopRegistration);
router.get("/getAll",WorkshopController.workshopFetch);
router.get("/get/:_id", WorkshopController.workshopFetchById);
router.put("/update/:_id",WorkshopController.workshopUpdate);
router.delete("/delete/:_id",WorkshopController.workshopDeleteById);


export default router;