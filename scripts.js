
// The provided code takes the values of billTotal and taxPercentage from HTML elements. 
// It calculates the tax amount and the total bill with tax by applying the tax percentage to the bill total. Finally,
//  it updates the HTML to display the calculated tax amount and total bill with tax.
document.querySelector('form').addEventListener('input', function() {
    let billTotal = parseFloat(document.getElementById('billTotal').value);
    let tip = parseInt(document.getElementById('tip').value);

 // // Validation checks 
    if(isNaN(billTotal)) {
        alert("Please enter a valid number for Bill Total!");
        return;
    }
// Logic
    document.getElementById('tipPercentage').value = tip + "%";
    let tipAmount = (billTotal * tip / 100).toFixed(2);
    document.getElementById('tipAmount').value = tipAmount;
// Updates HTMl
    let totalBillWithTip = (billTotal + parseFloat(tipAmount)).toFixed(2);
    document.getElementById('totalBillWithTip').value = totalBillWithTip;
});

// Animation
var tl=gsap.timeline()

 tl.from(".container,h3,h1", {duration: 1.2, y: -300, opacity: 0, ease: "bounce",stagger:0.4})

tl.from("form,label,input", {duration: 0.7, y:400, opacity: 0,stagger:0.1 })
