const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.btn');

registerLink.addEventListener('click', () =>{
    logregBox.classList.add('active');
});


function displayMonthlyRate() {

    const inputBoxAmount = document.getElementById("inputAmount");
    const amount = inputBoxAmount.value;
    const inputBoxRate = document.getElementById("inputInterest");
    const interestRate = inputBoxRate.value;
    const inputBoxTerm = document.getElementById("inputYears");
    const termYears = inputBoxTerm.value;

    loginLink.addEventListener('click', () =>{
        logregBox.classList.remove('active');
    });
  }