//  Step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-3
    const withdrawAmountTotalElement = document.getElementById('withdraw-total');
    const previousWithdreawTotalString = withdrawAmountTotalElement.innerText;
    const previousWithdreawTotal = parseFloat(previousWithdreawTotalString);

    // Step-4
    const currentWithdrewTotal = previousWithdreawTotal + newWithdrawAmount;
    withdrawAmountTotalElement.innerText = currentWithdrewTotal;

    // Step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // Step-7
    withdrawField.value = '';

})