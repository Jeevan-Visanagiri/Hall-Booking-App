var express = require("express");
const { route } = require(".");
var router = express.Router();



var Booking = [];
router.post("/", (req, res) => {
    
    try {
        
  let bookrequest = req.body;
  if (Booking.length !== 0) {
    for (let i = 0; i < Booking.length; i++) {
      if (
        (Booking[i].BookingDate !== bookrequest.BookingDate) &
        (Booking[i].StartTime !== bookrequest.StartTime) &
        (Booking[i].EndTime !== bookrequest.EndTime)
      ) {
        Booking.push(bookrequest);
        res.json({
            Message: "Booking successful",
          });
          console.log(Booking,Booking.length);

          return res.send();
      }
      else{
          res.json(
              {
                  Message:"Give Booking Date and Time is already Booked."
              }
          );
          return res.send();
      }
    }
  }
  else{
    Booking.push(bookrequest);
    res.json({
        Message: "Booking successful",
      });
      console.log(Booking);
  }

    } catch (error) {
        console.log(error);        
    }
});

router.get("/", (req, res) => {
    
    res.json(Booking);
  });

module.exports = router;
