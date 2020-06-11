import express from "express"
const routes = express.Router()

import UserController from "./controllers/userController"

const userController = new UserController

routes.post("/users", userController.create)
routes.get("/users", userController.index)

export default routes