//Union 
function getUserinfunction(customerId) {
    if (typeof (customerId) == 'number') {
        return 45;
    }
    else if (typeof (customerId) == 'string') {
        return "String";
    }
    else if (typeof (customerId) == 'boolean') {
        return 'its Boolean';
    }
}
console.log(getUserinfunction(1000));
console.log(getUserinfunction("Kumar"));
console.log(getUserinfunction(true));
