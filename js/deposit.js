// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // Step-3: Get the cuent deposit total
    // for non-this.inputMode(element other input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDpositTotalString = depositTotalElement.innerText;
    const previousDpositTotal = parseFloat(previousDpositTotalString);

    // Step-4: add numbers to set the total deposit
    const currentDepositAmount = previousDpositTotal + newDepositAmount;

    // set the deposit total
    depositTotalElement.innerText = currentDepositAmount;

    // Step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // Step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step-7: clear the deposit field
    depositField.value = '';

})