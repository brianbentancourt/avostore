import DB from "../../../database/db"
import enablePublicAccess from '@cors'

const getAvo = async (req, res, next) => {
    try {
        const db = new DB()
        const id = req.query.id

        const entry = await db.getById(id)

        //res.statusCode = 200
        //res.setHeader('Content-Type', 'application/json')
        //res.end(JSON.stringify({ data: entry }))

        // se puede hacer lo mismo con nextJs de una forma mas corta
        res.status(200).json(entry)
    } catch (e) {
        console.error(e)
        res.status(404).end()
    }
}

export default getAvo