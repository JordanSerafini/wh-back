import express from "express";

import utilisateurController from "../controllers/controller";


const router = express.Router();

router.get("/all", utilisateurController.getAll);



  export default router