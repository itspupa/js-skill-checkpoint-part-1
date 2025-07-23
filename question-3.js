// Question #3
let userPassword = "ssswnalWadqQ";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    const length = userPassword.length
    if (length < 6) {
        return "Weak";
    }else if (length <= 10) {
        return "medium";
    } else {
        return "strong";
    }
}

console.log(checkPasswordStrength(userPassword)); 

