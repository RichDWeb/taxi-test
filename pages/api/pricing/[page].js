import path from 'path'
import fs from 'fs'

export default async function handler(req, res) {

    if(req.method === 'GET') {

        const pageId = req.query.page
        
        const filepath = path.join(process.cwd(), 'data', 'prices.json')
        const fileData = fs.readFileSync(filepath)
        const data = JSON.parse(fileData)
    
        const page = pageId
        const limit = 20
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
    
        const pag = data.locations.slice(startIndex, endIndex)

        res.status(200).json({message: 'Success', pag})

        return pag
    
    }
}