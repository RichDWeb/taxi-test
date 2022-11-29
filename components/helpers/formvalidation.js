export function formValidation(input) {

    const { 
        fullname,
        phonenumber,
        pickupaddress,
        destination,
        oneWayDate,
        oneWayTime,
        returnWay,
        returnDate,
        returnTime } = input

    const numbers = /^[0-9]+$/g
    const letters = /[A-Z]/g
    let error = []

    //Check name information
    if(!fullname.match(letters) || fullname === '' ) {
        error.push({ message: 'Please enter a vaild name' })
    }

    //Check contact information
    if(!phonenumber.match(numbers) || phonenumber.length <= 0 || phonenumber.length > 11) {
        error.push({ message: 'Please enter a vaild contact number'})
    }

    //Check pickup address information
    if(pickupaddress === '') {
        error.push({ message: 'Please enter a vaild pickup address.'})
    }

    return error
}