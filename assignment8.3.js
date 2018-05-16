//JavaScript function printTimesTable which prints times (till 10) table for given number as input.

function printTimesTable(num)
{
  if(!(isNaN(num))) // Checking if the input number is a number or not.
  //If not prompt the user to enter a valid number
  {
    var res=0;
    for(i=1;i<=10;i++)
    {
        res= i * num  ;
        console.log(num + " * " + i + " = " + res + "" )
    }
 }

 else
 {
  console.log("Please enter a valid number");

 }
}

printTimesTable(5); // Calling the function with input as 5
console.log("-------------------------");
printTimesTable(15); // Calling the function with input as 15
