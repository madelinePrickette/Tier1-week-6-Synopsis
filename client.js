console.log( 'js' );

$( document ).ready( readyNow );

const budget = 25000;

function readyNow(){
// console.log( 'JQ' );
    //display budget
    //target budgetOut by id
    let el = $( '#budgetOut' );
    el.empty();
    el.append( budget );
}//end readyNow