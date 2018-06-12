function BankAccount(name, initialAmount) {
  // var this
  this.name = name;
  this.initialAmount = initialAmount;
  this.balance = initialAmount;
  // return this
}

BankAccount.prototype.deposit(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw(amount) {
  this.balance -= amount;
}

BankAccount.prototype.getBalance() {
  return this.balance;
}
