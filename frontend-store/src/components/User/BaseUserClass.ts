export class BaseUserClass {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  phoneNumber: number;
  dob: string; //dateJoined: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    id: string,
    phoneNumber: number,
    dob: string //dateJoined: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.dob = dob; //this.dateJoined = dateJoined;
  }
}
