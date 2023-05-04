
console.log('functions');



// function definition/ it is a part of of the code  that automatize an action


//predefined function :it already exists in the language .it iq used my calling iot


// a variable of string is in reality an object string which possesses the property and mtthods . syntaxes to access 


//var_name.propertyname;
//var_name.methodname();
//function_name();


//var_name.methodname();


/**the property "length" */


/*****   predefined function **** */

var Name= "mushi";
console.log(Name.includes("i"));
console.log(Name.length);

Name=console.log(Name.toUpperCase);
console.log(Name);


Name=console.log(Name.toLowerCase);
console.log(Name);


var hall= "it is cold ";
console.log(hall.repeat("cold","hot"));


var number= " 22.30 ";
console.log(typeof number);
console.log(parseInt(number));
console.log(typeof parseInt(number));



console.log(parseFloat(number));
console.log(typeof parseFloat(number));

var Name= "mushi";
console.log(Name.includes("y"));
console.log(Name.indexOf("s"));



/*****   user function **** */
console.log("welcome");

// declaration of a function or defining function
function myfunc(){   // it starts with a keyword function followed by a customised name given to the function by developper
    console.log("hello");

}
myfunc();          // calling a function 


/************functions with parameters****** */


function myfunc( toWhom){   
                             //a function receives the info through     parameters can return the info with "ruturn" 
 console.log("hello" + toWhom);

}

myfunc("world");  
myfunc("universe"); 
myfunc("planet"); 

function para( content){   
    //a function receives the info through     parameters can return the info with "ruturn" 
document.write(content );

}

myfunc("<p> paragraph </p>");  
myfunc("<h1> heading </h1>"); 