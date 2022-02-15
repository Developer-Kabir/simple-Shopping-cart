function updateCaseNumber(isIncreasin){
    let caseQ = document.getElementById("case-quantity");
    const caseNumber = caseQ.value;

    if (isIncreasin){
        caseQ.value = parseInt(caseNumber) + 1;
    }
    else if ( caseNumber > 0 ){
        caseQ.value = parseInt(caseNumber) - 1;
    }
}

document.getElementById("plus").addEventListener("click", function(){
   updateCaseNumber(true);
});

document.getElementById("minus").addEventListener("click", function(){
    updateCaseNumber(false);
});