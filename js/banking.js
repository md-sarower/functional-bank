
// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const first = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear deposit field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalDepositText = totalField.innerText;
    const previousDepositTotal = parseFloat(totalDepositText);
    totalField.innerText = previousDepositTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText); */
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalance + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalance - depositAmount;
    }
}

// Deposit site

document.getElementById('deposit-button').addEventListener('click', function () {
    /*
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */



    // get and update deposit total
    /* 
    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositText = totalDeposit.innerText;
    const previousDepositTotal = parseFloat(totalDepositText);
    totalDeposit.innerText = previousDepositTotal + depositAmount; */

    // update balance after deposit input
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance + depositAmount; */

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('total-deposit', depositAmount);
        updateBalance(depositAmount, true);
    }
})

// Withdraw site
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const inputWithdrawAmount = parseFloat(withdrawInputText); */
    // get and update withdraw total
    /* 
    const withdraw = document.getElementById('withdraw-total');
    const withdrawText = withdraw.innerText;
    const withdrawAmount = parseFloat(withdrawText); 
    withdraw.innerText = inputWithdrawAmount + withdrawAmount; */
    // updated balance after withdraw
    /* 
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    balance.innerText = balanceAmount - inputWithdrawAmount; */

    const inputWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (inputWithdrawAmount > 0 && inputWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', inputWithdrawAmount);
        updateBalance(inputWithdrawAmount, false);
    }
    if (inputWithdrawAmount > currentBalance) {
        console.log('Please input amout below your current balance!!')
    }
})
