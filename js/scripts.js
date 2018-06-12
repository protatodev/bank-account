function BankAccount(name, initialAmount) {
  // var this
  this.name = name;
  this.initialAmount = initialAmount;
  this.balance = initialAmount;
  this.password = "";
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

BankAccount.prototype.getName = function() {
  return this.name;
}

function clearFields() {
  $("#name").val("");
  $("#initial-deposit").val("");
  $("#current-balance").text("");
  $("#home-collapse").hide();
  $("#submit-button").attr("disabled", false);
}

function returnIndex(array, name) {
  for (i=0; i < array.length; i++) {
    if (name === array[i].getName()) {
      return i;
    }
  }
}

$(document).ready(function() {
  var accountArray = [];
  var name = "";
  var returnIndex(

  $("#registration").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initialAmount = parseFloat($("#initial-deposit").val());

    if (name === "" || initialAmount === 0) {
      return;
    }

    $("#home-collapse").hide().fadeIn(1500);
    var account = new BankAccount(name, initialAmount);
    accountArray.push(account);
    $("#userName").text(accountArray[0].getName());
    $("#current-balance").text("Your balance is $" + accountArray[0].getBalance().toFixed(2));
    $("#current-accounts").append("<li>" + accountArray[0].getName() + "</li>");
    $("#submit-button").attr("disabled", true);
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

  $("#sign-out").click(function(){
    clearFields();
  });


});
