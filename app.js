const today = new Date()
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

const birthDay ="1990/05/02"; 

const full_name = "Salim Mwaura Ruru"

let myObj ={
    "full_name": full_name,
    "month": monthNames[today.getMonth()],
    "year": today.getFullYear(),
    "day": days[today.getDay()],
    "dob": birthDay,
    "age": getAge(birthDay, today)
}

function getAge(dateString, today){
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month_diff = today.getMonth() - birthDate.getMonth();
    if (month_diff < 0 || (month_diff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

module.exports = myObj