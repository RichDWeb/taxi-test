export default function handle(req, res) {

    if(req.method === 'POST') {
        console.log("POST Recieved")
        console.log(req.body)
        res.status(200)
    }
}