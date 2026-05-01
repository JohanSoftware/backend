import { Router } from "express";
import { createReport, getReports } from "../controllers/report.controller.js";

const router = Router();

router.post("/", createReport);
router.get("/", getReports);

export default router;