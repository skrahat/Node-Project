import { IBaseUserClass } from './type';

export class BaseUserClass {
    private _userName: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _id: string;
    private _password: string;

    constructor(baseUserClassObj: IBaseUserClass) {
        this._userName = baseUserClassObj.userName;
        this._firstName = baseUserClassObj.firstName;
        this._lastName = baseUserClassObj.lastName;
        this._email = baseUserClassObj.email;
        this._id = baseUserClassObj.id;
        this._password = baseUserClassObj.password;
    }
    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
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
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
}
