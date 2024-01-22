



var bill;
var custom;
var person;
var tipStore = 0;
var tipCheck = false;

console.log(custom);







// ----------        enter the bill          --------------------------------------------------------
var EnterBill = function () {

    document.querySelector("#errorBill").innerHTML = "";

    person = document.querySelector("#personId").value;
    bill = document.querySelector("#billEnterid").value;

    if (person == "") {

        document.querySelector(".errorPerson").innerHTML = "Can't be zero";

        return false;
    } else if (bill <= 0) {
        document.querySelector("#errorBill").innerHTML = "Can't be zero";
        return false;
    }
    showPersonBill();
}




//  enter the person  ---------------------------------------------------------------------------
var enterPerson = function () {
    person = document.querySelector("#personId").value;
    bill = document.querySelector("#billEnterid").value;

    if (bill == 0) {
        document.querySelector("#errorBill").innerHTML = "Can't be zero";
        console.log("person - " + person);
        return false;
    } else if (person <= 0) {
        document.querySelector(".errorPerson").innerHTML = "Can't be zero";
        return false;

    }

    document.querySelector(".errorPerson").innerHTML = "";

    showPersonBill();

}



// ------------------------------------ RIght ----------------------------------------------------

var customAction = function () {
    custom = document.querySelector(".customInput").value;
    custom = parseInt(custom);
    tipCheck = true;
    showTip();
}

// show person bill on right
var perPersonCost;
var showPersonBill = function () {

    var billprice = bill;
    var TotalPeople = person;




    if (person > 0 && bill > 0) {


        perPersonCost = bill / TotalPeople;
        perPersonCost = perPersonCost.toFixed(2);

        document.querySelector(".h2").innerHTML = perPersonCost;
        console.log(perPersonCost);

        //function calling
        showTip();
    }

    // if(tipCheck){
    //     perPersonCost = perPersonCost + tipPerPerson;
    //     document.querySelector(".h2").innerHTML = perPersonCost;
    //     tipCheck = false;
    // }

}

// getting tip
var showTip = function () {

    if (tipCheck) {

        if (bill > 0 && person > 0) {
            if (tipStore !== "") {
                var actualtip = bill * tipStore / 100;


                var tipPerPerson = actualtip / person;
                tipPerPerson = tipPerPerson.toFixed(2);

                document.querySelector(".h1").innerHTML = tipPerPerson;
                //---------------------------------------------------------------------------------------------
                var addtip = parseFloat(tipPerPerson);
                var addtotal = parseFloat(perPersonCost);

                var bilLWithTip = addtip + addtotal;



                bilLWithTip = bilLWithTip.toFixed(2);
                // console.log(bilLWithTip);
                document.querySelector(".h2").innerHTML = bilLWithTip;


                //-----------------------------------------------
                var costumPercent = custom;
                if (custom > 0) {

                    actualtip = bill * costumPercent / 100;

                    tipPerPerson = actualtip / person; // THIS WILL GIVE PER PERSON TIP

                    tipPerPerson = tipPerPerson.toFixed(2);

                    document.querySelector(".h1").innerHTML = tipPerPerson;

                    var addcustomTip = parseFloat(tipPerPerson);
                    var addcustomTotalAmount = parseFloat(perPersonCost);

                    var tipCustomAmountFinal = addcustomTip + addcustomTotalAmount;
                    tipCustomAmountFinal = tipCustomAmountFinal.toFixed(2);
                    document.querySelector(".h2").innerHTML = tipCustomAmountFinal;




                }


            }


        }

        tipCheck = false;

    }





}




// var tipAddTOPerson = function(){

//         if(){

//         }

// }









// -----------   tip ----------------




var Tippercentage = function (a) {
    tipCheck = true

    colorReset();

    var tip = a;
    console.log(a)
    console.log(tip);
    passTip(a);
    showTip();

    switch (tip) {

        case "5%":
            document.querySelector(".b1").style.backgroundColor = "hsl(172, 67%, 45%)";
            break;
        case "10%":
            document.querySelector(".b2").style.backgroundColor = "hsl(172, 67%, 45%)";
            break;
        case "15%":
            document.querySelector(".b3").style.backgroundColor = "hsl(172, 67%, 45%)";
            break;
        case "25%":
            document.querySelector(".b4").style.backgroundColor = "hsl(172, 67%, 45%)";
            break;
        case "50%":
            document.querySelector(".b5").style.backgroundColor = "hsl(172, 67%, 45%)";
            break;


    }


}




















var colorReset = () => {
    document.querySelector(".b1").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.querySelector(".b2").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.querySelector(".b3").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.querySelector(".b4").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.querySelector(".b5").style.backgroundColor = "hsl(183, 100%, 15%)";
   

}




var passTip = function (tipcatch) {



    tipStore = parseInt(tipcatch);




}




// reset functionnality

var ResetAll = function () {
    document.querySelector("#errorBill").innerHTML = "";
    tipCheck = false;
    document.querySelector(".errorPerson").innerHTML = "";
    colorReset();
    document.querySelector(".h2").innerHTML = "0.00";
    document.querySelector(".h1").innerHTML = "0.00";
    document.querySelector(".personInput").value= "";
    document.querySelector("#personId").value= "";
    document.querySelector(".customInput").value = "";
    console.log("end");
 
}