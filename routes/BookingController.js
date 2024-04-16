// routes/booking.js
import express from "express";
import { bookProperty, viewBookings, cancelBooking, approveBooking, deleteBooking } from "../controllers/BookingController.js";

const router = express.Router();

router.post("/", bookProperty);
router.get("/user/:userId", viewBookings);
router.delete("/:bookingId", cancelBooking);
router.put("/approve/:bookingId", approveBooking);
router.delete("/delete/:bookingId", deleteBooking);

export default router;
