{
  //access modifiers

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

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  //   class StudentAccount extends BankAccount{
  //     test(){
  //         this.name = this.name
  //     }
  //   }

  const personAccount = new BankAccount(1212, "Mr x", 100);
  personAccount.addDeposit(100);
  const myBalance = personAccount.getBalance();
  console.log(myBalance);

  //
}
