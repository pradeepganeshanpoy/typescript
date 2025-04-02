//optional parameter 
//  age? nu kodutha it will consider as optional parameter. optional parameter ku value kodukurathu namma istam, it will never show the error


function getInformation(firstname: string, age?: number): string {
    return firstname +" "+ age;
}

console.log(getInformation('Pradeep')); // Output = Pradeep undefined

console.log(getInformation('Pradeep', 25)); // Output = Pradeep 25