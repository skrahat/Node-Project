export class BaseUserClass {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _id: string;
    private _phoneNumber: number;
    private _dob: string;
    private _dateJoined?: string | undefined;

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
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get phoneNumber(): number {
        return this._phoneNumber;
    }
    public set phoneNumber(value: number) {
        this._phoneNumber = value;
    }
    public get dob(): string {
        return this._dob;
    }
    public set dob(value: string) {
        this._dob = value;
    }
    public get dateJoined(): string | undefined {
        return this._dateJoined;
    }
    public set dateJoined(value: string | undefined) {
        this._dateJoined = value;
    }
}
