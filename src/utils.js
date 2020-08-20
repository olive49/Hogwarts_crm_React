class Print {
  constructor() {
    this.print = true;
  }
  printSomething(string) {
    console.log("here");
    this.print && console.log(string);
  }

  changePrintStatus() {
    this.print = !this.print;
  }
}

export default Print;
