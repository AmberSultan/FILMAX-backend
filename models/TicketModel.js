const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    hall: {
        type: Schema.Types.ObjectId,
        ref: "Hall",
        required: true
    },
    seat: {
        seatNumber: {
            type: Number,
            required: true
        },
        seatType: {
            type: String,
            enum: ["Gold", "Silver", "Regular"],
            required: true
        }
    },
    showtime: {
        type: String, // Format like "14:00" for 2 PM
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    totalSeats: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["booked", "available", "canceled"], // Ticket status
        default: "available"
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model("Ticket", ticketSchema);
