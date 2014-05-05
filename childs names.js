
<script type="text/javascript">
<!--

var childName = [];
var counter = 0;
var newName = "";
var nameCount = 0;
var lineCount = 67;
// while loop
while (counter <= 2)
{
  newName = prompt("What is the child's name?", "");
	childName[counter] = newName;
	counter = counter + 1;
}
sortedName = childName.sort()
nameOut =  childName.toString()
alert("done looping input");
alert(nameOut);
alert(sortedName);
//for loop 
document.write("The child's names are: <p>");
for (nameCount = 0; nameCount <=2; nameCount++)
{// begin brace
lineCount = lineCount + 1;
document.write(lineCount + ".  " + childName[nameCount] + "<br>");

}//end brace

// -->
</script>