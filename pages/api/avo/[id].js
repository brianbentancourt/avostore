import DB from "../../../database/db"

const getAvo = async (req, res, next) => {
    const db = new DB()
    const id = req.query.id

    const entry = await db.getById(id)

    //res.statusCode = 200
    //res.setHeader('Content-Type', 'application/json')
    //res.end(JSON.stringify({ data: entry }))

    // se puede hacer lo mismo con nextJs de una forma mas corta
    res.status(200).json(entry)
}

export default getAvo