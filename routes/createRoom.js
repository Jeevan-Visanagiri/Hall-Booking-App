const { RSA_NO_PADDING } = require("constants");
var express = require("express");
const { route } = require(".");
var router = express.Router();

var room=[];

router.post("/", async function (req, res) {
  try {
    room.push(req.body);

    if (
      (room.NoofSeatsAvail !== null) &
      (room.amenities !== null) &
      (room.PriceperHr !== null)
    ) {
      res.json({
        message: "Room created",
      });
      console.log(room);
    } else {
      res.json({
        message: "Something went wrong",
      });
      return res.send();
    }
    return res.send();
  } catch (error) {
    console.log(error);
  }
});

var routerget =router.get("/", async (req, res) => {
  res.json(room);
});
module.exports = router;
