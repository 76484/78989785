const TransactionManager = function () {
  this.id = Math.round(Math.random() * 10000);
};

TransactionManager.prototype.runSomeFunction = function () {
  return `TM#${this.id}`;
};

module.exports = TransactionManager;
