require("express-group-routes");
//inisialisasi modul express
const express = require("express");
//mendeklarasikan express di dalam app variable
const app = express();

const cors = require("cors");
//mengatur port yang digunakan
const port = process.env.PORT || 5000;
//init bodyparser
const bodyParser = require("body-parser");

//allow this app o receive incoming json request
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

//middlewares
const { authenticated } = require("./middleware");

//membuat route home
app.get("/", (req, res) => {
  // res berarti response dan berfungsi mengirimkan "Hello Express" kepada API
  res.send("Hello Express");
});

// when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`));

//import controllers
const authControllers = require("./controllers/auth");
const userControllers = require("./controllers/user");
const categoryControllers = require("./controllers/category");
const eventControllers = require("./controllers/event");
const paymentControllers = require("./controllers/payment");

app.group("/api/v2", router => {
  router.post("/login", authControllers.login);
  router.post("/register", authControllers.register);

  //user
  router.get("/users", userControllers.listUser);
  router.get("/user/:id", userControllers.UserById);

  //category
  router.get("/categories", categoryControllers.listCategory);
  router.get("/category/:id", categoryControllers.CategoryById);

  //event
  router.get("/event?title/:title", eventControllers.EventByTitle);
  router.get("/category/:id/event", eventControllers.EventByCategory);
  router.get("/event/:id", eventControllers.EventById);
  router.get("/events", eventControllers.listevent);
  router.post("/event", eventControllers.addEvent);

  //payment
  router.post("/payment", paymentControllers.payment);
  router.get("/payment/:id", paymentControllers.paymentId);
  router.put("/payment/:id", paymentControllers.updateStatusConfirm);
  router.put("/payment/eo/:id", paymentControllers.updateStatusApproved);
  router.get("/payment/ticket/:id", paymentControllers.getPaymentApproved);
});
