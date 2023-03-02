import { Router } from "express";
import {
  getAdmin,
  deleteAdmin,
  postAdmin,
  putAdmin,
  getAdminId
} from "../controllers/lista.controllers.js";

const router = Router();

router.get("/administradores", getAdmin);
router.get("/administradores/:id", getAdminId);
router.post("/administradores", postAdmin);
router.put("/administradores/:id", putAdmin);
router.delete("/administradores/:id", deleteAdmin);

export default router;
