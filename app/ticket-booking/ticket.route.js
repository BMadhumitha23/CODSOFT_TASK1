const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket.model'); // Adjust the path as per your project structure

// POST /api/tickets - Create a new ticket
router.post('/tickets', async (req, res) => {
    Ticket.init()
    const ticket=new Ticket({
        movieTitle:req.body.movieTitle,
        screen:req.body.screen,
        price:req.body.price,
        date:req.body.date,
        time:req.body.time,
        number_of_seat:req.body.seats,
        seattype:req.body.seattype,
        amount:req.body.amount
    })

    ticket.save().then((data)=>{
        console.log('save data:',data)
    })
})

