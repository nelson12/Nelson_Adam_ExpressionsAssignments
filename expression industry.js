//adam nelson 071813 expressions industry
//How many shots must be given per hour to get all the vaccines given for the day?
var doctorNames=[ "Dr Flinstone", "Dr Rubble,"];//decclaring doctors;
console.log(doctorNames);
var doctorsWorking=prompt(" I am trying to determine the number of shots that are needed in an hour to get all the vaccines given for the day please enter number of doctors working");//declaring doctorsWorking and prompting for an answer;
var hoursWorking=prompt("Please enter the total hours that the Doctors will be working");//declaring hours worked by doctors;
var immunizations=prompt("Please enter the total number of patients being immunized");//declaring total immunizations to be given;
var medical= immunizations/(doctorsWorking*hoursWorking);
//equation to find shots per hour per doctor; 

