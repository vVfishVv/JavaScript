<script type="text/javascript">
<!--
var numWidgets, delivery, discountRate, fee;
var subtotal, discount, deliveryFeeTotal, totalFee;
//assignments
widgetCost = 10;
smallOrderDisc = .10;
smallOrderCutoff = 10;
medOrderDisc = .20;
medOrderCutoff = 50;
largeOrderDisc = .30;
largeOrderCutoff = 100;
deliveryFee = 1;

//Input
numWidgets = prompt("How many widgets?", " ");
delivery = prompt("Will they be delivered?", "yes/no");

//Calculations
if (numWidgets > largeOrderCutoff)
{
   discountRate = largeOrderDisc;
}
else if (numWidgets > medOrderCutoff)
{
   discountRate = medOrderDisc;
} 
else if (numWidgets > smallOrderCutoff)
{
   discountRate = smallOrderDisc;
}	 
else
{
  discountRate = 0;
}
if (delivery = "yes")
{   
	 fee = deliveryFee;
}	  
else
{
   fee = 0;
}	 
subtotal=  numWidgets * widgetCost;
discount= subtotal * discountRate;
deliveryFeeTotal= numWidgets * fee;
totalFee = subtotal-discount+deliveryFeeTotal;
//output
document.write("Amount of widgets "+numWidgets);
document.write("<br>Your subtotal is $"+subtotal);
document.write("<br>The discount is  $"+discount);
document.write("<br>The delivery fee is $"+deliveryFeeTotal);
document.write("<br>Total charges are $"+totalFee);
// -->
</script>