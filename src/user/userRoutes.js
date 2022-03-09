

const { Router } = require("express");
const { addUser, login, updatePassword} = require("./userControllers");
const { hashPassword, decryptPassword, checkToken  } = require("../middleware");
const userRouter = Router();

// crud

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", hashPassword, checkToken, updatePassword)

module.exports = userRouter;