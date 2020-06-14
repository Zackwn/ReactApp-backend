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
            return res.status(500).send("Email já está sendo utilizado!")
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { page = 1 } = req.query

            const query = await knex("users")
                .limit(5)
                .offset((Number(page) - 1) * 5)

            return res.json(query)
        } catch (err) {
            return res.status(400).send("Erro ao carregar users")
        }
    }
    async destroy (req: Request, res: Response) {
        try {
            const { id } = req.params

            await knex("users")
                .where({id}) // ou .where("id", id)
                .del()

            return res.json({"message": true})
        } catch (err) {
            return res.status(500).send("Erro ao remover user")
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name, email } = req.body
    
            const newData = { name, email }

            const updatedUser = await knex("users")
                .where({ id })
                .update(newData)

            return res.json({ "User id: ": updatedUser })
        } catch(err) {

        }
    }
    async show(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user = await knex("users")
                            .where({ id }).first()
            
            if (!user) {
                return res.status(400).send("User não encotrado!")
            }        
            
            return res.json(user)
        } catch(err) {
            return res.status(500).send("Erro interno!")
        }
    }
}

export default userController