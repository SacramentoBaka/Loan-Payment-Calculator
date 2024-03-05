const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.btn');

function displayMonthlyRate() {

    const inputBoxAmount = document.getElementById("inputAmount");
    const loanAmount = parseFloat(inputBoxAmount.value);
    const inputBoxRate = document.getElementById("inputInterest");
    const interestRate = parseFloat(inputBoxRate.value);
    const inputBoxTerm = document.getElementById("inputYears");
    const loanTerm = parseInt(inputBoxTerm.value);

    const results = document.getElementById("inputResults");
   
    registerLink.addEventListener('click', () =>{
        
        if(!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTerm)){

            const monthlyInterestRate = (interestRate / 100) / 12;
            const numberOfPayments = loanTerm * 12;
            const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
            const monthlyPayment = (loanAmount * x * monthlyInterestRate) / (x - 1);
            results.value = monthlyPayment;
            logregBox.classList.add('active');
        } 
        
    });
  }
  loginLink.addEventListener('click', () =>{
    logregBox.classList.remove('active');
});