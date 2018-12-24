
 /*                   FIRST PROGRAM TO REWRITE THE "GIVEN FUNCTION IN THE ASSIGNMENT" BY USING ES6  
  _________________________________________________________________________________________________________________*/


//DECLARED AND DEFINED A SMALL ARRAY JUST TO SEE THE OUTPUT ON BROWSER.
let userInfo=[
               {

               	Id:001,
               	Name:"Ankit Singh",
               	Email:"fliiiwithme@gmail.com",
               	Password:"1234"

               },
               {

               	Id:002,
               	Name:"Daksh Singh",
               	Email:"fliiiwithmeab@gmail.com",
               	Password:"5678"

               }
             ];


let checkLogin=(email,password,allUsers)=>  //ARROW FUNCTIONS
{
	let isUserFound=false;                  //BLOCK SCOPE USING "let" KEYWORD
	let passwordCorrect= false;
	for(currentUser of allUsers)           //for Of LOOP
	{
		
		if(currentUser.Email.toLowerCase()==email.toLowerCase()) 
		{
			if(currentUser.Password==password)
                {
	                 isUserFound=true;
	                 passwordCorrect=true;
	                 break;
                }
           else 
                {
	                 isUserFound=true;
	                 passwordCorrect=false;
	                 break;
                }
		}
		else
		{
		         isUserFound=false;
		}
	} //END FOR-OF LOOP
if(isUserFound==true && passwordCorrect==true)
{

	alert(`You are logged in`); //USING OF template literals

}

else if(isUserFound==true && passwordCorrect==false)
{

	alert(`You have provided incorrect password`);    //USING OF template literals

}
else
{

	alert(`No user with this email found`);   

}

}//END OF checkLogin FUNCTION

var email=window.prompt(`Enter e-mail-`);
var pass=window.prompt(`Enter password-`);
checkLogin(email,pass,userInfo);