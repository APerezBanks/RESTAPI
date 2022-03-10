

const { Router } = require("express");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movieControllers");
const movieRouter = Router();


// CRUD bellow

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.patch("/movie", updateMovie);
movieRouter.delete("/movie/:filterKey/:filterVal", deleteMovie);

module.exports = movieRouter;