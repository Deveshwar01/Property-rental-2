import express, { Router } from "express"
import { deleteProperty,updateProperty,getAllBuyer ,createProperty } from "../controllers/seller.js";

const router = express.Router();

router.post("/create", createProperty);
router.delete("/delete/:Id", deleteProperty);
router.get("/all", getAllBuyer);
router.patch("/update/:Id", updateProperty);

export default router;