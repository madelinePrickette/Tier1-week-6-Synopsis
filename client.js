console.log( 'js' );

$( document ).ready( readyNow );

const budget = 25000;

let purchases = [];

function addPurchase(){
    console.log( 'in addPurchase' );
    //get user input & get a new object
    let newPurchase = {
        name: $( '#purchaseNameIn' ).val(),
        price: $( '#purchasePriceIn' ).val()
    }
    //push the new purchase into the array
    purchases.push( newPurchase );
    //empty inputs
    $( '#purchaseNameIn' ).val( '' );
    $( '#purchasePriceIn' ).val( '' );
    //calculate remainingBudget
    calculateRemainingBudget();
}//end addPurchase

function calculateRemainingBudget();{
    console.log( 'in calculateRemainingBudget' );
    //loop through purchases array
    let totalPrices = 0;
    for (let i = 0; i<purchases.length; i++){
    //for each purchase, add up total of all prices
    //subtract totalPrices from budget for remainingBudget
    totalPrices += purchases[ i ].price;
    }//end for loop
    console.log( 'totalPrices:', totalPrices);
 //display remainingBudget
}//end calculateRemainingBudget

function readyNow(){
// console.log( 'JQ' );
    //display budget
    //target budgetOut by id
    let el = $( '#budgetOut' );
    el.empty();
    el.append( budget );
    //handle click event
    $( '#addPurchaseButton' ).on( 'click', addPurchase );
}//end readyNow