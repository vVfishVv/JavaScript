<script type="text/javascript">
<!--
var WidgetInventory, customerName, numberWidgets, customerName;
var totalOrder, agvPerCustomer;
//assignments
var widgetCost = 10;
var startWidgetInventory = 100;
var customerCount = 0;
var outputAccum = "";
widgetInventory = startWidgetInventory;
//loop
while (widgetInventory > 0)
{// start loop brace
  numberWidgets = prompt("How many widgets? Out of " + widgetInventory + " widgets", "");
  if (numberWidgets <= widgetInventory)
	{// start <= true brace
	  customerCount = customerCount + 1;
		  if (customerCount = 1)
			{
			  customerName = prompt("What is your name?", "");
				outputAccum = "Daily Sales of widgets:  " + customerCount + ".  " + customerName + ":  " + numberWidgets + " widgets";
			}
			else
			{
			outputAccum = outputAccum + "<br>" + customerCount + ".  " + customerName + ":  " + numberWidgets + " widgets";
			}
			 totalOrder = numberWidgets * widgetCost;
			 widgetInventory = widgetInventory - numberWidgets;
			 alert("The bill is $" + totalOrder);
	 }// end <= true brace
	 else
	 {// begin <= false brace
	 	  alert("You tried to enter " + numberWidgets + " but there are only " + widgetInventory + "'s left.")
			errorFlag = 1;	 
	 }// end <= false brace
	   alert("This is the output accumulated" + outputAccum);
	 widgetInventory = widgetInventory - numberWidgets;
}// end loop brace
avgPerCustomer = startWidgetInventory / customerCount;
document.write("Daily average per customer: " + avgPerCustomer);
//alert(widgetInventory);
// -->
</script>