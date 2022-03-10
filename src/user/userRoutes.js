const { Router } = require("express");
const {  addUser,  login, updatePassword,deleteUser} = require("./userControllers");
const {  hashPassword,  decryptPassword,  checkToken} = require("../middleware");
const userRouter = Router();

// app is listlening bellow

// CRUD

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", hashPassword, checkToken, updatePassword);
userRouter.delete("/user/:username", checkToken, deleteUser);


module.exports = userRouter;