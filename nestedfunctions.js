/* Create a nested function to pass the outer function values and inner function values. Identify the outer function is a closure or not? Create the instance of outer function which will call the inner function with passing the data as it’s parameter.*/

//Nested function prints whether both outer and inner functions are both closures if they are closures
function nestedfunction(){

    var outerString = "function is a closure"; // String variable that is used to compose the text string variable
    //Outer nested function
    function outer() 
    {        
        // String variable to set the content of <p> element with id = outer"
        var text = "The outer() " + outerString;    

        //Inner nested function
        function inner()
        { 
            document.getElementById("outer").innerHTML = text; //Setting the element's innerHTML  
            document.getElementById("inner").innerHTML = "The inner() " + outerString; //Setting the element's innerHTML
        }
        // The outer function returns the inner function
        return inner();
    }
    outer(); // Calling outer function 
}