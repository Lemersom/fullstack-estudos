
function DateTime() {
    
    let currentdate = new Date()

    let date = `${currentdate.getDate()}/${currentdate.getMonth()+1}/${currentdate.getFullYear()}`
    
    let hour = currentdate.getHours()
    let msgHour = ""

    if(hour < 12) {
        msgHour = "Bom Dia"
    }
    else if(hour > 18) {
        msgHour = "Boa Noite"
    }
    else {
        msgHour = "Boa Tarde"
    }

    return (
        <>
            <p>Data: {date}</p>
            <p>{msgHour}</p>
        </>
    )
}

export default DateTime