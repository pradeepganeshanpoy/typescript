//Enum or Enumeration.
// if we doesn't assign the value, iot automatically assings from 0 and add to ech additional value next to next.
/* enum Browser{
    chrome, // 0
    firefox, // 1
    Edge, //2
    safari //3
}
console.log(Browser.Edge); */ // output = 2
//=================================================================================================================================
// if we assign the value by manually its will accept and run. 
/* enum Browser{
    chrome = 10,
    firefox, // 11
    Edge = 15,
    safari //16
}
console.log(Browser.firefox); */ // output = 11
//=================================================================================================================================
// String Enum = We can store only string enum
/* enum environment {
    DEV = "dev",
    QA = "qa",
    STAGE = "stage",
    Prod = "prod"
}
console.log(environment.QA) */ // output = qa
//=================================================================================================================================
//heterogenous Enum = here we can store both String and number only.
var Direction;
(function (Direction) {
    Direction["North"] = "north";
    Direction["East"] = "45";
    Direction["West"] = "rohit 45";
})(Direction || (Direction = {}));
console.log(Direction.West); // 
