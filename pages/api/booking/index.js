import nodemailer from 'nodemailer'

async function validateHuman(token) {

    const secret = process.env.RECAPTCHA_SECRET_KEY

    console.log(secret)

    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json()


    console.log(data)

    return data.success
}

export default async function handle(req, res) {

    if(req.method === 'POST') {

        const human = await validateHuman(req.body.token)
        if(!human) {
            res.status(400).json({ message: 'Not Authorised'})
            return 
        }
        
        const messageToBeSent = `
            Booking Made
            First Name:             ${req.body.firstName}
            Surname:                ${req.body.surname}
            phonenumber:            ${req.body.phonenumber}
            Pickup:                 ${req.body.startDestination}
            Drop Off:               ${req.body.endDestination}
            Number of Passengers:   ${req.body.passengers}
            Number of Luggage:      ${req.body.luggage}
            One way date:           ${req.body.oneWayDate}
            One way time:           ${req.body.oneWayTime}
            Return Date:            ${req.body.returnDate}
            Return Time:            ${req.body.returnTime}
            Message:                ${req.body.message}
        `
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            },
            secure: true
        })

        await new Promise((resolve,reject) => {
            transporter.verify(function (error, success) {
                if(error) {
                    console.log(error)
                    reject(error)
                } else {
                    console.log("Server is ready to take our message")
                    resolve(success)
                }
            })
        }) 

        const mailOptions = {
            from: 'localcabsemail@gmail.com',
            to: 'rd.codex@outlook.com',
            subject: 'Booking',
            text: messageToBeSent
        }

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            })
        })

        res.status(200).json({ message: 'Successfuly Sent'})
    }
}