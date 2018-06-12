function BankAccount(name, initialAmount, password) {
  // var this
  this.name = name;
  this.initialAmount = initialAmount;
  this.balance = initialAmount;
  this.password = password;
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

BankAccount.prototype.getPassword = function() {
  return this.password;
}

function hideAll() {
  $("#register").hide();
  $("#login").hide();
  $("#homeDiv").hide();
  $("#depositDiv").hide();
  $("#withdrawDiv").hide();
  $(".balance").hide();
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
  var arrIndex = 0;
  hideAll();

  $("#registerButton").click(function() {
    $("#register").toggle();
    $("#login").hide();
  });

  $("#loginButton").click(function() {
    $("#login").toggle();
    $("#register").hide();
  });

  $("#registration").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var password = $("#create-password").val();
    var initialAmount = parseFloat($("#initial-deposit").val());

    if (name === "" || initialAmount === 0) {
      return;
    }

    $("#homeDiv").hide().fadeIn(1500);
    var account = new BankAccount(name, initialAmount, password);
    accountArray.push(account);
    $("#userName").text(accountArray[accountArray.length - 1].getName());
    $("#current-balance").text("Your balance is $" + accountArray[accountArray.length - 1].getBalance().toFixed(2));
    $("#current-accounts").append(accountArray[accountArray.length - 1].getName() + "</br>");
    $(".balance").show();
  });

  $("#depositButton").click(function() {
    $("#depositDiv").toggle();
    $("#withdrawDiv").hide();
  })

  $("#withdrawButton").click(function() {
    $("#withdrawDiv").toggle();
    $("#depositDiv").hide();
  })


  $("#deposit-form").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseFloat($("#deposit-amount").val());
    accountArray[arrIndex].deposit(depositAmount);
    $("#current-balance").text("Your balance is $" + accountArray[arrIndex].getBalance().toFixed(2));
  });

  $("#withdraw-form").submit(function(event) {
    event.preventDefault();
    var withdrawalAmount = parseFloat($("#withdrawal").val());
    if (isNaN(withdrawalAmount)) {
      return;
    }
    accountArray[arrIndex].withdraw(withdrawalAmount);
    $("#current-balance").text("Your balance is $" + accountArray[arrIndex].getBalance().toFixed(2));
  });

  $("#sign-out").click(function(){
    clearFields();
    hideAll();
  });

  $("#login").submit(function(event) {
    event.preventDefault();
    var name = $("#loginName").val();
    arrIndex = returnIndex(accountArray, name);
    var enteredPassword = $("#password").val();
    if (enteredPassword === accountArray[arrIndex].getPassword()) {
      $("#userName").text(accountArray[arrIndex].getName());
      $("#homeDiv").show();
      $(".balance").show();
      $("#current-balance").text("Your balance is $" + accountArray[arrIndex].getBalance().toFixed(2));
      $("#wrong-password").text("");
    } else {
      $("#wrong-password").text("Incorrect username or password");
    }

  });


});
