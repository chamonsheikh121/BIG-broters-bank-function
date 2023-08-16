document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDeposit = inputFloatValue('input-deposit')

    if(inputDeposit < 0){
        alert("deposit amount can't be less than 0");
        return;
    }
    else if(isNaN(inputDeposit)){
        alert('please input your deposit amout');
        return;
    }
    const currentDeposit = currentElementFloatValue('current-deposit');
    

    const newDeposit = inputDeposit + currentDeposit;

    attachWithCurrentElement('current-deposit', newDeposit);

    const currentBalance = currentElementFloatValue('current-balance');
    const newBalance = currentBalance + inputDeposit;
    attachWithCurrentElement('current-balance', newBalance);

})
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdraw = inputFloatValue('input-withdraw');
   
    const currentWithdraw = currentElementFloatValue('current-withdraw');
    if(inputWithdraw < 0){
        alert("withdraw amount can't be less than 0");
        return;
    }
    else if(isNaN(inputWithdraw)){
        alert('please input your withdrawal amount');
        return;
    }
    else if( inputWithdraw > currentWithdraw){
        const mess = 'Message form BIG brother:: choto vai amar bank a ato tk nei.actu kom kore khoros kor.amake pothe boshar issa ace naki tor!!!!!!!!!!'
        alert(mess)
        return;
    }

    const newWithdraw = inputWithdraw + currentWithdraw;

    attachWithCurrentElement('current-withdraw', newWithdraw);

    const currentBalance = currentElementFloatValue('current-balance');

    const newBalance = currentBalance - inputWithdraw;

    attachWithCurrentElement('current-balance', newBalance);
})