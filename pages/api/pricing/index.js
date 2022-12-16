import path from 'path'
import fs from 'fs'

export default async function handler(req, res) {

    if(req.method === 'GET') {   

        console.log("REQEST: ", req.query)

        const numberPerPage = req.query.limit
        const page = req.query.page
        const query = req.query?.query?.toLowerCase()
        const indexOfLastRecord = page * numberPerPage
        const indexOfFirstRecord = indexOfLastRecord - numberPerPage
        const keys = ["airport", "city", "area"]

        // // Get the pricing data from file, later a database.
        const filepath = path.join(process.cwd(), 'data', 'prices.json')
        const fileData = fs.readFileSync(filepath)
        const data = JSON.parse(fileData)
        
        // filter data based on query.
        const search = (data) => {
            return data.filter((item) => {
                return (
                    keys.some((key) => item[key]?.toLowerCase().includes(query))
                )
            })
        }
        const searchData = search(data.locations)
        const filtered = searchData.slice(indexOfFirstRecord, indexOfLastRecord)
        const numberOfPages = Math.ceil(searchData.length / numberPerPage)

        return res.status(200).json({ message: 'Success', data: filtered, numPerPage: numberOfPages })
    }

}