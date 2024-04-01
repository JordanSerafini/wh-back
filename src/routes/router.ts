import express from "express";

import utilisateurController from "../controllers/controller";
import poiController from "../controllers/poiController";
import veveController from "../controllers/veve/veveController";

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

// Route veve
router.get("/veve", veveController.getAll);
router.get("/veve/:id", veveController.getOne);
router.post("/veve", veveController.create);
router.patch("/veve/:id", veveController.update);
router.delete("/veve/:id", veveController.delete);
router.get("/veve/nom/:nom", veveController.getByName);
router.get("/veve/owner/:owner", veveController.getByOwner);

router.post("/swapImg", veveController.swapImg);


  export default router