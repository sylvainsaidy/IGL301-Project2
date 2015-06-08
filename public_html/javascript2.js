function validAmount(e) { 
     var k = e.keyCode; 
     if ((k >= 96 && k <= 105) || (k >= 48 && k <= 57) || (k === 8)) { 
         return true; 
     } 
     else { 
         return false; 
     } 
 } 
 
 
 function validRate(e) { 
     var k = e.keyCode; 
     var value = document.getElementById("rateText").value; 
     if ((k >= 96 && k <= 105) || (k >= 48 && k <= 57) || (k === 8)) { 
         if ((value === null) || (value.trim() === ""))  { 
             return true; 
         } 
             if ((k === 8) || (k === 48) || (k === 96)) { 
                 return true; 
             } 
             else { 
                 return false; 
             } 
         } 
         else { 
             return false; 
         } 
     } 
 
 
 function validMonths(e) { 
     var k = e.keyCode; 
     var value = document.getElementById("monthsText").value; 
     if ((k >= 96 && k <= 105) || (k >= 48 && k <= 57) || (k === 8)) { 
         if ((value === null) || (value.trim() === ""))  { 
             return true; 
         } 
         else if ((k === 48) || (k === 96) || (k === 49) || (k === 97) || (k === 50) || (k === 98) || (k === 8)) { 
             return true; 
         } 
         else { 
             return false; 
         } 
     } 
     else { 
         return false; 
     } 
 } 
 
  function getInterest() { 
     var amount = document.getElementById("amountText").value; 
     var rate = document.getElementById("rateText").value; 
     var months = document.getElementById("monthsText").value; 
     document.getElementById("interest").value = amount * rate * months / 100; 
 } 
