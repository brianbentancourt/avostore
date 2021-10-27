import DB from '../../../database/db'
import enablePublicAccess from '@cors'

const allAvos = async (req, res, next) => {
    try {
        const db = new DB()
        const allEntries = await db.getAll()
        const length = allEntries.length
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ data: allEntries, length }))
    } catch (e) {
        console.error(e)
        res.statusCode = 500
        res.end(
            JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
        )
    }

}

export default allAvos