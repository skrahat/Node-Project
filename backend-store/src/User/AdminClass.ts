import { BaseUserClass } from './BaseUserClass';
import { IAdminClass } from './type';

export class CustomerUserClass extends BaseUserClass {
    private _postion: string;
    constructor(baseUserClass: IAdminClass) {
        super(baseUserClass);
        this._postion = baseUserClass.postion;
    }
    public get phoneNumber(): string {
        return this._postion;
    }
    public set phoneNumber(value: string) {
        this._postion = value;
    }
}
