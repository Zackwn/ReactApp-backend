import { Request, Response } from "express"
import knex from "../database/connection"

class userController {
    async create(req: Request, res: Response) {
        try {
            const { name, email } = req.body
            const dados = {name, email}

            const user = await knex("users").insert(dados)

            return res.json({...user, dados})
        } catch (err) {
            return res.status(500).send("Erro ao criar novo usuario, tente novamente!")
        }
    }

    async index(req: Request, res: Response) {
        try {
            //const { page = 1 } = req.query

            const query = await knex("users")
                //.limit(5)
                //.offset((Number(page) - 1) * 5)

            return res.json(query)
        } catch (err) {
            return res.status(400).send("Erro ao carregar users")
        }
    }
}

export default userController