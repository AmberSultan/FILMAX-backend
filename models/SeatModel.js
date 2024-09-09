const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seatSchema = new Schema(
  {
    seatNumber: [
      {
        type: String,
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["available", "booked"],
      default: "available",
    },
    price: {
      type: Number,
      required: true,
    },
    hall: {
      type: Schema.Types.ObjectId,
      ref: "Hall",
    },
  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Seat", seatSchema);
