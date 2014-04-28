<script type="text/javascript">
<!--
var footballNameCount = 0;
var basketballNameCount = 0;
var baseballNameCount = 0;
var baseballNames = [];
var basketballNames = [];
var footballNames = [];
var anotherName = "yes";
var baseballCounter = 0;
var basketballCounter = 0;
var footballCounter = 0;
var baseballNameCount = 0;
var basketballNameCount = 0;
var footballNameCount = 0;
var baseballCount = 0;
var basketballCount = 0;
var footballCount = 0;
var baseballLineCount = 0;
var basketballLineCount = 0;
var footballLineCount = 0;
//while loop
while (anotherName == "yes")
{//while beg brace
  sportType = prompt("Which sport would you like to add a team too?  baseball, basketball, or football","baseball");
  switch (sportType)
  {//switch beg brace
	case "baseball":
	  newBaseballNames = prompt("What is the baseball team's name?","");
		baseballNames[baseballCount] = newBaseballNames;
		baseballCount = baseballCount+1;
	break;
	case "basketball":
	  newBasketballNames = prompt("What is the basketball team's name?","");
		basketballNames[basketballCount] = newBasketballNames;
		basketballCount = basketballCount+1;
	break;
	case "football":
	  newFootballNames = prompt("What is the football team's name?","");
		footballNames[footballCount] = newFootballNames;
		footballCount = footballCount+1;
	break;
	default:
	 errorFlag = 1;
	  alert("You were suppose to choose either baseball, basketball, or football but you entered " + sportType + ". Please correct this. Thank you.");
	break;
  }//switch end brace
  anotherName = prompt("Do you have another team to enter? yes/no","yes");
}//while end brace
//for baseball loop
document.write("The list of baseball teams: <p>");
for (baseballNameCount = 0; baseballNameCount < baseballCount; baseballNameCount = baseballNameCount + 1)
{ 
  baseballLineCount = baseballLineCount + 1;
  document.write(baseballLineCount + ". " + baseballNames[baseballNameCount]+ "<br>");
}//for end
document.write("<br>The list of basketball teams: <p>");
for (basketballNameCount = 0; basketballNameCount < basketballCount; basketballNameCount = basketballNameCount + 1)
{ 
  basketballLineCount = basketballLineCount + 1;
  document.write(basketballLineCount + ". " + basketballNames[basketballNameCount]+ "<br>");
}//for end
document.write("<br>The list of football teams: <p>");
for (footballNameCount = 0; footballNameCount < footballCount; footballNameCount = footballNameCount + 1)
{ 
  footballLineCount = footballLineCount + 1;
  document.write(footballLineCount + ". " + footballNames[footballNameCount]+ "<br>");
}//for end
// -->
</script>