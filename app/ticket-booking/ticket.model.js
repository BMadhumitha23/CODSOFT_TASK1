const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    movieTitle: String,
    screen: String,
    price: Number,
    date: Date,
    time: String,
    seats: Number,
    seatType: String,
    amount: Number
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;