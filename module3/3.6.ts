{
  //getter and setter

  class BankAccount {
    readonly id: number;
    name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter
    set addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter

    get getBalance() {
      return this._balance;
    }

    // uning method and value pabo function call kore
    // getBalance() {
    //   return this._balance;
    // }
  }

  const personAccount = new BankAccount(1212, "Mr x", 100);
  personAccount.addDeposit = 550;
  const myBalance = personAccount.getBalance; // function call korte hosse na
  console.log(myBalance);

  //
}
