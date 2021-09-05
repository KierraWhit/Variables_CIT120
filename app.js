var inputBill = Number (prompt( "What is your bills?"));
var taxAmount = inputBill*.07;
var taxbill_total = inputBill+taxAmount;
var tip_amount = taxbill_total*.05;
var total = tip_amount+taxbill_total
var element=document.body.querySelector(".box");
element.innerHTML=total;



