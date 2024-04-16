// controllers/BookingController.js
import { Booking } from '../models/Booking.js';
import { Propertys } from '../models/Property.js';

export const bookProperty = async (req, res) => {
    try {
        const { propertyId, userId, startDate, endDate } = req.body;

        // Check if property exists
        const property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ success: false, message: 'Property not found' });
        }

        // Create a new booking
        const booking = new Booking({
            property: propertyId,
            user: userId,
            startDate,
            endDate
        });

        await booking.save();

        res.status(201).json({ success: true, booking });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const viewBookings = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find bookings for the given user
        const bookings = await Booking.find({ user: userId }).populate('property');

        res.status(200).json({ success: true, bookings });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;

        // Find the booking and delete it
        await Booking.findByIdAndDelete(bookingId);

        res.status(200).json({ success: true, message: 'Booking cancelled successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const approveBooking = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;

        // Update the booking status to 'approved'
        await Booking.findByIdAndUpdate(bookingId, { status: 'approved' });

        res.status(200).json({ success: true, message: 'Booking approved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const deleteBooking = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;

        // Find the booking and delete it
        await Booking.findByIdAndDelete(bookingId);

        res.status(200).json({ success: true, message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
