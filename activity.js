//Submitted by Caayao
//part 1
function oddEvenChecker(num){
	isNaN(num) === false ? (
	num % 2 == 0 ? console.log('The number is even.') : console.log('The number is odd.')) : console.log('Invalid Input.')

}

oddEvenChecker(45);
oddEvenChecker(22);
oddEvenChecker('hello');
oddEvenChecker('twenty four');

//part 2
function budgetChecker(budget){
	isNaN(budget) === false ? (
		budget > 40000 ? console.log('You are over the budget.') : console.log('You have resources left.')
		) : console.log('Invalid Input')
}

budgetChecker(35000);
budgetChecker(41000);
budgetChecker('Hello');
budgetChecker('fourty thousand');