require("./db/connection");
const express = require("express");
const cors = require("cors");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5001;
// add things to the application, the ability to work with json data, pass json data convetr to js objects
app.use(express.json());

// is  used to connect the back with front I think. the position is really important in need to be above the routers.
app.use(cors());

// grab everything thats been added  to movie router and Userrouter
app.use(movieRouter);
app.use(userRouter);

// listlening to everything on top on port ( this case 5001 )
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});






// prior to do any request( imsomia ) lines 1-12 have been run
// require brings things from the outside;
// creates app with the value off express
//