let billAmount = document.getElementById("billAmount");
let person = document.getElementById("person");
let tip = document.querySelectorAll(".tip");
let showTip = document.getElementById("showTip");
let amountPerPerson = document.getElementById("amountPerPerson");
let reset = document.getElementById("reset");

// let tipbtn = tip.value;

for (let i = 0; i < tip.length; i++) {
  tip[i].addEventListener("click", () => {
    let totalPerson = parseFloat(person.value);
    let Amount = parseFloat( billAmount.value)*80;
   let tipValue = Number(tip[i].value)

  
   let totalTip = (Amount*tipValue)/80;
   let xyz = (totalTip/totalPerson).toFixed(2)
   showTip.innerText = `$${xyz}`;

   totalAmountPerPerson = ((Amount/80)/totalPerson)+ parseFloat (xyz);
   abc = (totalAmountPerPerson).toFixed(2);
   amountPerPerson.innerText = `$${abc}`;


  });
}
reset.addEventListener("click", () => {

    person.value = "";
    billAmount.value = "";
    showTip.innerText = "$0.00";
    amountPerPerson.innerText = "$0.00";
})
