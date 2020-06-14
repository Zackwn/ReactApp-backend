import express from "express"
const routes = express.Router()

import UserController from "./controllers/userController"

const userController = new UserController

routes.post("/users", userController.create)
routes.get("/users", userController.index)
routes.delete("/users/:id", userController.destroy)
routes.put("/users/:id", userController.update)
routes.get("/users/:id", userController.show)

export default routes