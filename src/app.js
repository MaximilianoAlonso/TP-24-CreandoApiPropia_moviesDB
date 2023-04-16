const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const createError = require("http-errors");
const app = express();

// view engine setup
app.set("views", path.resolve(__dirname, "./views")).set("view engine", "ejs");

app
  .use(express.static(path.resolve(__dirname, "../public")))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(methodOverride("_method"));

//routes

const { actorsRouter, genresRouter, moviesRouter } = require("./v1/routes");
const createResponseError = require("./helpers/createResponseError");

app
  .use("/api/v1/actors", actorsRouter)
  .use("/api/v1/genres", genresRouter)
  .use("/api/v1/movies", moviesRouter)

  // catch 404 and forward to error handler
  .use(function (req, res, next) {
    next(createError(404,'No encontrado'));
  })

  // error handler
  .use(function (error, req, res, next) {
    return createResponseError(res,error)
  });

//Activando el servidor desde express
app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));
