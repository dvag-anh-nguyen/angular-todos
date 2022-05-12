export class User {
  firstName: string = '';
  lastName: string = '';

  constructor(firstName: string, lastName: string) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
