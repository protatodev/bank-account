function BankAccount(name, initialAmount) {
  // var this
  this.name = name;
  this.initialAmount = initialAmount;
  this.balance = initialAmount;
  // return this
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}

BankAccount.prototype.getBalance = function() {
  return this.balance;
}

$(document).ready(function() {
  var accountArray = [];

  $("#registration").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initialAmount = parseFloat($("#initial-deposit").val());
    var account = new BankAccount(name, initialAmount);
    accountArray.push(account);
    $("#current-balance").text("Your balance is $" + accountArray[0].getBalance().toFixed(2));
    console.log(accountArray[0]);
  });


  $("#deposit-form").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseFloat($("#deposit-amount").val());
    accountArray[0].deposit(depositAmount);
    $("#current-balance").text("Your balance is $" + accountArray[0].getBalance().toFixed(2));
  });

  $("#withdraw-form").submit(function(event) {
    event.preventDefault();
    var withdrawalAmount = parseFloat($("#withdrawal").val());
    accountArray[0].withdraw(withdrawalAmount);
    $("#current-balance").text("Your balance is $" + accountArray[0].getBalance().toFixed(2));
  });






});
