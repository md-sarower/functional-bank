
// Deposit site
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear deposit field
    depositInput.value = '';
    // get current deposit
    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositText = totalDeposit.innerText;
    const previousDepositTotal = parseFloat(totalDepositText);
    totalDeposit.innerText = previousDepositTotal + depositAmount;
    // update balance with deposit input
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance + depositAmount;
})

// Withdraw site
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const inputWithdrawAmount = parseFloat(withdrawInputText);
    // clear withdraw field
    withdrawInput.value = '';
    // accounts of total withdraw
    const withdraw = document.getElementById('withdraw-total');
    const withdrawText = withdraw.innerText;
    const withdrawAmount = parseFloat(withdrawText);
    withdraw.innerText = inputWithdrawAmount + withdrawAmount;
    // updated balance after withdraw
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    balance.innerText = balanceAmount - inputWithdrawAmount;
})
