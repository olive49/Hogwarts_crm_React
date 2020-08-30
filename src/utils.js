class Print {
  constructor() {
    this.print = true;
  }

  printSomething(string) {
    this.print && console.log(string);
  }

  changePrintStatus() {
    this.print = !this.print;
  }
}

export default Print;
