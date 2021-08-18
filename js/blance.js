
function getInput(inputId) {
   const inputFild = document.getElementById(inputId);
   const inputAmount = parseFloat(inputFild.value);
   // clear Input
   inputFild.value = "";
   return inputAmount;
}

function addBlance(sumInput, depositeAmount) {
   const depositeBlance = document.getElementById(sumInput);
   const depositeCurrentAmount = parseFloat(depositeBlance.innerText);
   const updatedAmount = depositeCurrentAmount + depositeAmount;
   const totalAmount = depositeBlance.innerText = updatedAmount;
   return totalAmount;

}

function getMainBlance(){
   const mainBlance = document.getElementById("main-blance");
   const currentMainBlance = parseFloat(mainBlance.innerText);
   return currentMainBlance;
}

function updateBlance(depositeAmount, isadded) {
   const mainBlance = document.getElementById("main-blance");
   const currentMainBlance = getMainBlance()
   const mainDeposite = parseFloat(depositeAmount);
   const updatedMainBlance = currentMainBlance + mainDeposite;
   mainBlance.innerText = updatedMainBlance;

   if (isadded) {
      const updatedMainBlance = currentMainBlance + mainDeposite;
      mainBlance.innerText = updatedMainBlance;
   }
   else {
      const updatedMainBlance = currentMainBlance - mainDeposite;
      mainBlance.innerText = updatedMainBlance;
   }

}






document.getElementById("deposite-btn").addEventListener("click", function () {

   //call function for input
   const depositeAmount = getInput("deposite-input");

   if (depositeAmount > 0) {
      //call function for add amount
      addBlance("deposite-blance", depositeAmount);
      // call function for update Blance
      updateBlance(depositeAmount, true);

   } else {
      alert("plese inter a positive number");
   }

})


////Widthrow

document.getElementById("widthrow-btn").addEventListener("click", function () {

   //call function for input
   const widthrowInputBlance = getInput("widthrow-input")
   const blance = getMainBlance()
   if (widthrowInputBlance > 0 && widthrowInputBlance <= blance) {
      //call function for add amount
      const widthrowTotalBlance = addBlance("widthrow-blance", widthrowInputBlance)
      //call function for update Blacne
      updateBlance(widthrowTotalBlance, false);
   }
   else{
      alert("plese inter a positive number");
   }





})
