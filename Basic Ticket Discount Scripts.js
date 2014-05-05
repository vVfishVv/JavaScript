<script type="text/javascript">
<!--
var adultTotal, childTotal, seniorTotal, militaryTotal;
var avgPerCustomer, grandTotal; 
var adultRate = 8;
var childRate = 4;
var seniorRate = 6;
var militaryRate = 7;
var moreCustomers = "yes";
var ticketType = "";
var numTickets = 0;
var adultTicketAccum = 0;
var childTicketAccum = 0;
var seniorTicketAccum = 0;
var militaryTicketAccum = 0;
var customerCount = 0;
//assignments


//calculations
while (moreCustomers == "yes")
{//begin while loop
 customerCount = customerCount + 1;
 ticketType = prompt("What kind of ticket? adult, child, senior, or military", "adult");
 numTickets = prompt("How many tickets?","");
 numTickets = parseInt(numTickets);
  switch (ticketType)
	{//begin switch brace
	   case "adult":
		   adultTicketAccum = adultTicketAccum + numTickets;
			 adultTotal = adultTicketAccum * adultRate;
			 break;
			 		 
		 case "child":
		   childTicketAccum = childTicketAccum + numTickets;
			 childTotal = childTicketAccum * childRate;
			 break;
		 
		 case "senior":
		   seniorTicketAccum = seniorTicketAccum + numTickets;
			 seniorTotal = seniorTicketAccum * seniorRate;
			 break;		 
		 
		 case "military":
		   militaryTicketAccum = militaryTicketAccum + numTickets;
			 militaryTotal = militaryTicketAccum * militaryRate;
			 break;
		 default:
		   alert("You entered " + ticketType + ". You should have entered either adult, child, senior, or military. Please correct this and start the order over. Thank you.");
	}//end switch brace
	moreCustomers = prompt("Do you have more customers?", "yes");
}//end while loop
grandTotal = adultTotal + childTotal + seniorTotal + militaryTotal;
avgPerCustomer = grandTotal / customerCount;
alert(grandTotal);
alert(avgPerCustomer);
avgPerCustomer = avgPerCustomer.toFixed(2);
//output
document.write("The total amount of money collected for adult tickets: $" + adultTotal);
document.write("<br>The total amount of money collected for children tickets: $" + childTotal);
document.write("<br>The total amount of money collected for senior tickets: $" + seniorTotal);
document.write("<br>The total amount of money collected for military tickets: $" + militaryTotal);
document.write("<br>The average amount of tickets sold per customer is: "+avgPerCustomer);
document.write("<br>The grand total for todays sales is: $" + grandTotal);

// -->
</script>