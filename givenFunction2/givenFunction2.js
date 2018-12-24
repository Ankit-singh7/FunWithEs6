
/*           SECCOND PROGRAM TO REWRITE THE "GIVEN FUNCTION IN THE ASSIGNMENT" BY USING ES6
___________________________________________________________________________________________________________*/

let bubble_Sort=(...a)=>//USING ARROW FUNCTION & USING REST PARAMETER
{               

	let swapp; //USING BLOCK SCOPE
	let n=a.length-1;
	let x=a;
	do
	{
		swapp=false;

		for(var i=0;i<n;i++)
		  {
			 if(x[i]<x[i+1])

			   {

				 let temp=x[i];
				 x[i]=x[i+1];
				 x[i+1]=temp;
				 swapp=true;

			   }//END OF IF-STATEMENT

		  } //END OF FOR LOOP

		n--;

	} while(swapp);//END OF DO-WHILE LOOP

alert("The bubble sorted array is-"+"\n"+"["+x+"]");


}//END OF bubble_Sort FUNCTION.



 bubble_Sort(2,100,4,43,6,7,89);
 bubble_Sort(78,100,67,43,56,90,89);



