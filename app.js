const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
var CronJob = require('cron').CronJob;

app.use(express.json());

//import simulation code
const autoCreate = require("./inputstream/autocreate");

//import routes
const showRoutes = require("./routes/showRoute");
const movieRoutes = require("./routes/movieRoute");
const userRoutes = require("./routes/userRoute");
const adminRoutes = require("./routes/adminRoute");
const ovaRoutes = require("./routes/ovaRoute");
const specialRoutes = require("./routes/specialRoute");

app.use("/show", showRoutes);
app.use("/movie", movieRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/ova", ovaRoutes);
app.use("/special", specialRoutes);

//connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

//simulate creation stream
var i = 0;

var job = new CronJob('0 * * * * *', function() {
  autoCreate(i);
  i = (i+1)%5;
  console.log('~~~Anime creation input simulated for every minute~~~');
}, null, true, 'America/New_York');

job.start();


  //listen to the server
app.listen(3000);
