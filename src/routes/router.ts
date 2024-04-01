import express from "express";

import utilisateurController from "../controllers/controller";
import poiController from "../controllers/poiController";

const router = express.Router();

// Utilisateur routes
router.get("/all", utilisateurController.getAll);

// Point of interest routes
router.get("/poi", poiController.getAll);
router.get("/poi/:id", poiController.getOne);
router.post("/poi", poiController.create);
router.patch("/poi/:id", poiController.update);
router.delete("/poi/:id", poiController.delete);
router.get("/poi/nom/:nom", poiController.getByName);
router.get("/poi/owner/:owner", poiController.getByOwner);

  export default router