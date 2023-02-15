export class User {
  constructor(
    public image: string,
    public quote: string,
    public age: string,
    public name: string
  ) {}

  hiddenAge() {
    this.age = '';
  }
}
