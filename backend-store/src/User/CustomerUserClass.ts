import { BaseUserClass } from './BaseUserClass';
import { ICustomerUserClass } from './type';

export class CustomerUserClass extends BaseUserClass {
    private _phoneNumber: number;
    private _dob: string;
    private _dateJoined: string;
    constructor(baseUserClass: ICustomerUserClass) {
        super(baseUserClass);
        this._phoneNumber = baseUserClass.phoneNumber;
        this._dob = baseUserClass.dob;
        this._dateJoined = baseUserClass.dateJoined;
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
    public get dateJoined(): string {
        return this._dateJoined;
    }
    public set dateJoined(value: string) {
        this._dateJoined = value;
    }
}
