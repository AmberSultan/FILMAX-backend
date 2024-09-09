const Ticket = require('../models/TicketModel');

const getTicket = async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.status(200).json({
            success: true,
            message: "Tickets retrieved successfully",
            data: tickets
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve tickets",
            error: err.message
        });
    }
};

const createTicket = async (req, res) => {
    const { movie, hall, seat, showtime, date, price, totalSeats , status } = req.body;
    const user = req.user._id;

    try {
        const ticket = await Ticket.create({ movie, hall, seat, showtime, date, user, price, totalSeats , status });
        res.status(201).json({
            success: true,
            message: "Ticket created successfully",
            data: ticket
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to create ticket",
            error: err.message
        });
    }
};

const updateTicket = async (req, res) => {
    const { id } = req.params;
    const { movie, hall, seat, showtime, date, user, price, totalSeats , status } = req.body;

    try {
        const ticket = await Ticket.findByIdAndUpdate(
            id,
            { movie, hall, seat, showtime, date, user, price, totalSeats , status },
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Ticket updated successfully",
            data: ticket
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to update ticket",
            error: err.message
        });
    }
};

const deleteTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await Ticket.findByIdAndDelete(id);

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Ticket deleted successfully",
            data: ticket
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to delete ticket",
            error: err.message
        });
    }
};

module.exports = {
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket
};
